<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookmarkRequest;
use App\Models\Asset;
use App\Services\AssetServices\AssetService;
use App\Services\BookmarkServices\BookmarkService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookmarkController extends Controller
{

    private BookmarkService $bookmarkService;
    private AssetService $assetService;

    /**
     * @param BookmarkService $bookmarkService
     * @param AssetService $assetService
     */
    public function __construct(BookmarkService $bookmarkService, AssetService $assetService)
    {
        $this->bookmarkService = $bookmarkService;
        $this->assetService = $assetService;
    }

    public function store(StoreBookmarkRequest $request): JsonResponse
    {
        $id = auth()->id();

        try {
            $assetToMatch = ['app_asset_id' => $request->app_asset_id];
            $assetToCreate = $request->only(
                'category_id',
                'type',
                'title',
                'layers',
                'frames',
                'thumbnail',
                'has_video',
                'video',
                'has_tutorial_video',
                'tutorial_video',
                'icon'
            );

            $asset = $this->assetService->firstOrCreateByAttribute($assetToMatch, [
                ...$assetToCreate,
                'user_id' => $id
            ]);


            $assetChildren = $request->children;
            if (count($assetChildren) > 0) {
                foreach ($assetChildren as &$child) {
                    $child['chapter_id'] = $child['id'];
                    unset($child['id']);
                }

                $asset->children()->createMany($assetChildren);
            }

            $bookmarkData = $request->only('is_folder');
            $bookmarkData['asset_id'] = $asset->id;
            $bookmarkData['folder_id'] = $request->folder_id ?? null;

            $bookmarkData = $this->bookmarkService->store($bookmarkData);
            $bookmarkWithAsset = [
                ...$bookmarkData->toArray(),
                'from' => 'db',
                'asset' => [
                    ...$bookmarkData->asset->toArray(),
                    'category_name' => $bookmarkData->asset->category->title,
                    'children' => $bookmarkData->asset->children,
                ],
            ];

            return response()->json(['message' => 'Bookmark created successfully', 'data' => $bookmarkWithAsset], 201);
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Error creating bookmark', 'error' => $e->getMessage()], 500);
        }
    }

    public function getList(): JsonResponse
    {
        $bookmarks = $this->bookmarkService->getBookmarks();

        return response()->json(['bookmarks' => $bookmarks], 201);
    }

    /**
     * @return JsonResponse
     */
    public function assets(): JsonResponse
    {
        $assets = auth()->user()->bookmarks()->with('asset')->get();
        return response()->json(['assets' => $assets], 201);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function destroy(Request $request): JsonResponse
    {
       return $this->bookmarkService->destroy($request->only('folder_id','bookmark_id', 'is_folder'));
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function copyToFolder(Request $request): JsonResponse
    {
        $request->validate([
            'folder_ids' => 'required|array',
            'folder_ids.*' => 'integer', // If each element in the array should be an integer
            'bookmark_id' => 'required',
        ]);
        return $this->bookmarkService->copyToFolder($request->input('folder_ids'), $request->input('bookmark_id'));
    }
}
