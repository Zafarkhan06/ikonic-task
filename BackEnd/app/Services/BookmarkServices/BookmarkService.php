<?php

namespace App\Services\BookmarkServices;

use App\Models\Asset;
use App\Repositories\Bookmark\Interfaces\BookmarkRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class BookmarkService
{
    /**
     * @param BookmarkRepositoryInterface $bookmarkRepository
     * @param FolderService $folderService
     */
    public function __construct(
        protected BookmarkRepositoryInterface $bookmarkRepository,
        protected FolderService $folderService
    )
    {
    }

    /**
     * @param $data
     * @return mixed
     */
    public function store($data): mixed
    {
       return $this->bookmarkRepository->store($data);
    }

    /**
     * @return mixed
     */
    public function getBookmarks(): mixed
    {
       return $this->bookmarkRepository->getBookmarks();
    }

    /**
     * @param $data
     * @return JsonResponse
     */

    public function destroy($data): JsonResponse
    {
        try {
            if (empty($data['folder_id']) && empty($data['bookmark_id'])) {
                return response()->json(['message' => 'Bookmark not found.'], 404);
            }

            // Check if it's a bookmark associate with any folder
            if (isset($data['is_folder'])) {
                if (empty($data['folder_id']) || empty($data['bookmark_id'])) {
                    return response()->json(['message' => 'Bookmark not found.'], 404);
                }
            } else {
                if (empty($data['folder_id']) && empty($data['bookmark_id'])) {
                    return response()->json(['message' => 'Bookmark not found.'], 404);
                } elseif (!empty($data['folder_id']) && !empty($data['bookmark_id'])) {
                    return response()->json(['message' => 'Bookmark not found.'], 404);
                }
            }

            // Delete folder if provided
            if (!empty($data['folder_id']) && !isset($data['is_folder'])) {
                $folder = $this->folderService->destroy($data['folder_id']);
                if (!$folder) {
                    return response()->json(['message' => 'Folder not found.'], 404);
                }
            }

            // Delete bookmark if provided
            if (!empty($data['bookmark_id']) && !isset($data['is_folder'])) {
                $bookmark = $this->bookmarkRepository->findByUser($data['bookmark_id'], auth()->id());
                if (!$bookmark) {
                    return response()->json(['message' => 'Bookmark not found.'], 404);
                }
                $bookmark->delete();
            }

            // Handle case when both folder and bookmark are provided
            if (!empty($data['folder_id']) && !empty($data['bookmark_id']) && isset($data['is_folder'])) {
                $bookmark = $this->bookmarkRepository->findByUser($data['bookmark_id'], auth()->id());
                $folder = $this->folderService->findByUser($data['folder_id'], auth()->id());
                if ($bookmark->folders()->count() > 1) {
                    $folder->bookmarks()->detach([$bookmark->id]);
                } else {
                    $bookmark->delete();
                }
            }

            return response()->json(['message' => 'Bookmark deleted successfully'], 200);
        } catch (\Throwable $exception) {
            return response()->json(['message' => 'Error deleting bookmark', 'error' => $exception->getMessage()], 500);
        }
    }

    /**
     * @param $folderIds
     * @param $bookmarkId
     * @return JsonResponse
     */
    public function copyToFolder($folderIds, $bookmarkId): JsonResponse
    {
        try {

           return DB::transaction(function () use ($folderIds, $bookmarkId) {
                $bookmark = $this->bookmarkRepository->findByUser($bookmarkId, auth()->id());
                if (!$bookmark) {
                    return response()->json(['message' => 'Bookmark not found'], 500);
                }

                $folders = $this->folderService->whereIn('id', $folderIds);
                $assetTitle = $bookmark->asset ? $bookmark->asset->title : null;

               $filteredFolders = $folders->reject(function ($folder) use ($assetTitle) {
                   return $folder->bookmarks()->whereHas('asset', function ($query) use ($assetTitle) {
                       $query->where('title', $assetTitle);
                   })->exists();
               });

               if ($filteredFolders->isNotEmpty()) {

                   foreach ($filteredFolders as $folder) {
                       $folder->bookmarks()->attach($bookmark->id);
                   }

                   return response()->json(['message' => 'Bookmark copied to bookmark groups'], 201);
               }
               return response()->json(['message' => 'Already exists in bookmark groups'], 400);
            });
        } catch (\Throwable $exception) {
            return response()->json(['message' => 'Error while copying bookmark to folders', 'error' => $exception->getMessage()], 500);
        }

    }
}
