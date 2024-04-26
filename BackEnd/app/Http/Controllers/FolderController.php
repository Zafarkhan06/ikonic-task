<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFolderRequest;
use App\Services\BookmarkServices\BookmarkService;
use App\Services\BookmarkServices\FolderService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class FolderController extends Controller
{

    private FolderService $folderService;
    private BookmarkService $bookmarkService;

    /**
     * @param FolderService $folderService
     * @param BookmarkService $bookmarkService
     */
    public function __construct(FolderService $folderService, BookmarkService $bookmarkService)
    {
        $this->folderService = $folderService;
        $this->bookmarkService = $bookmarkService;
    }

    /**
     * @param StoreFolderRequest $request
     * @return JsonResponse
     */
    public function store(StoreFolderRequest $request): JsonResponse
    {
        DB::beginTransaction();
        try {
            $folderData = $request->only('name');
            $folderData['user_id'] = auth()->id();

            $folder = $this->folderService->create($folderData);
            $bookmarkData = $this->bookmarkService->store([
                'asset_id' => null,
                'folder_id' => $folder->id,
                'is_folder' => 1,
            ]);
            $bookmarkDataArray = $bookmarkData->toArray();
            $bookmarkDataArray['folder_id'] = $folder->id;
            $bookmarkDataArray['folder_name'] = $folder->name;
            DB::commit();
            return response()->json(['message' => 'Bookmark group created successfully', 'data' => $bookmarkDataArray], 201);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Error while creating bookmark group', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * @param StoreFolderRequest $request
     * @param $id
     * @return JsonResponse
     */
    public function update(StoreFolderRequest $request, $id): JsonResponse
    {
        try {
            $folder = $this->folderService->find($id);
            $folder->update([
                'name' => $request->name,
            ]);
            $updatedFolder = $folder->toArray();
            $bookmarks = $this->folderService->getBookmarks($folder->id);
            $folderWithBookmarks = [...$updatedFolder, 'bookmarks' => $bookmarks];

            return response()->json(['message' => 'Bookmark group updated successfully', 'data' => $folderWithBookmarks], 201);

        } catch (\Throwable $throwable) {

            return response()->json(['message' => 'Error while updating bookmark group', 'error' => $throwable->getMessage()], 500);
        }
    }

    /**
     * @return JsonResponse
     */
    public function list(): JsonResponse
    {
        $folders = $this->folderService->all();
        return response()->json(['message' => 'success', 'folders' => $folders], 201);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function bookmarks(Request $request): JsonResponse
    {

        try {
            $request->validate([
                'folder_id' => 'required',
            ]);
            if ($request->folder_id) {
                $bookmarks = $this->folderService->getBookmarks($request->folder_id);
                return response()->json(['message' => 'success', 'bookmarks' => $bookmarks], 201);
            }
            return response()->json(['message' => 'Bookmark group not found.', 'bookmarks' => []], 500);
        } catch (\Throwable $throwable) {
            return response()->json(['message' => 'Error while getting  group bookmarks', 'error' => $throwable->getMessage()], 500);
        }
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        try {
            $folder = $this->folderService->destroy($id);

            if ($folder) {
                return response()->json(['message' => 'Bookmark group deleted successfully.'], 201);
            }

            return response()->json(['message' => 'Bookmark group not found.'], 500);
        } catch (\Throwable $exception) {
            return response()->json(['message' => 'Error while deleting bookmark group', 'error' => $exception->getMessage()], 500);
        }
    }

}
