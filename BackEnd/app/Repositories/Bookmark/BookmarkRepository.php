<?php

namespace App\Repositories\Bookmark;

use App\Models\Bookmark;
use App\Repositories\Base\BaseRepository;
use App\Repositories\Bookmark\Interfaces\BookmarkRepositoryInterface;
use App\Services\BookmarkServices\FolderService;

class BookmarkRepository extends BaseRepository implements BookmarkRepositoryInterface
{
    private FolderService $folderService;

    /**
     * @param Bookmark $bookmark
     */
    public function __construct(Bookmark $bookmark, FolderService $folderService)
    {
        parent::__construct($bookmark);

        $this->folderService = $folderService;

    }

    /**
     * @param $data
     * @return mixed
     */
    public function store($data):mixed
    {
        $bookmark = $this->model->create([
            'user_id' => auth()->user()->id,
            'asset_id' => $data['asset_id'],
            'is_folder' => $data['is_folder']
        ]);

        if($data['folder_id']){

            $folder = $this->folderService->find($data['folder_id']);
            $folder->bookmarks()->attach($bookmark->id);

        }
        return $bookmark;
    }

    public function getBookmarks():mixed
    {

        $bookmarksWithFoldersArray  =  $this->model
            ->where('user_id', auth()->id())
            ->with('folders','asset')
            ->whereHas('folders')
            ->get()
            ->groupBy('folders.0.id')
            ->map->first();
        $bookmarksWithFolders = $bookmarksWithFoldersArray->map(function ($bookmarksWithFolder){
            $folder = $bookmarksWithFolder->folders->first();
            return [
                'id' => $bookmarksWithFolder->id,
                'user_id' => $bookmarksWithFolder->user_id,
                'asset_id' => $bookmarksWithFolder->asset_id,
                'is_folder' => $bookmarksWithFolder->is_folder,
                'bookmarks' => $folder ?  $folder->bookmarks->count() : 0,
                'folder_name' => $folder ? $folder->name : null,
                'folder_id' => $folder ? $folder->id : null,
                'created_at' => $bookmarksWithFolder->created_at,
                'updated_at' => $bookmarksWithFolder->updated_at,
            ];
        });

        $bookmarksWithoutFolders = $this->model ->where('user_id', auth()->id())->with('asset.children')->doesntHave('folders')->get();
        foreach ($bookmarksWithoutFolders as $bookmark) {
            $bookmark->asset->from = 'db';
            $bookmark->asset->category_name = $bookmark->asset->category->title;
        }
        return $bookmarksWithFolders->merge($bookmarksWithoutFolders)->unique('id');

    }

    /**
     * @param $id
     * @param $userId
     * @return mixed
     */
    public function findByUser($id, $userId):mixed
    {
        return $this->model->where('id', $id)->where('user_id',$userId)->first();
    }
}
