<?php

namespace App\Services\BookmarkServices;

use App\Repositories\Bookmark\Interfaces\FolderRepositoryInterface;

class FolderService
{

    private FolderRepositoryInterface $folderRepository;

    /**
     * @param FolderRepositoryInterface $folderRepository
     */
    public function __construct(FolderRepositoryInterface $folderRepository)
    {
        $this->folderRepository = $folderRepository;
    }

    /**
     * @param $data
     * @return mixed
     */
    public function create($data): mixed
    {
        return $this->folderRepository->create($data);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function find($id): mixed
    {
        return $this->folderRepository->find($id);
    }


    /**
     * @return mixed
     */
    public function all(): mixed
    {
        $where = [
            ['user_id', auth()->user()->id]
        ];
        return $this->folderRepository->allWhere(['*'], $where);
    }

    public function getBookmarks($id)
    {
      $folder =  $this->folderRepository->find($id, ['bookmarks.asset']);
      return $folder->bookmarks->map(function ($bookmark) use ($folder){
          return[
              'id' => $bookmark->id,
              'user_id' => $bookmark->user_id,
              'asset_id' => $bookmark->asset_id,
              'is_folder' => $bookmark->is_folder,
              'folder_id' => $folder->id,
              'folder_name' => $folder->name,
              'from' => 'db',
              'asset' => $bookmark->asset ? [
                  ...$bookmark->asset->toArray(),
                  'category_name' =>  $bookmark->asset->category->title,
                  'children' => $bookmark->asset->children,
              ]: '',
              'created_at' => $bookmark->created_at,
              'updated_at' => $bookmark->updated_at,
          ];
      });
    }

    /**
     * @param $id
     * @return bool
     */
    public function destroy($id): bool
    {
        $folder = $this->folderRepository->findByUser($id, auth()->user()->id);

        if ($folder) {
            $folder->bookmarks->each->delete();
            $folder->delete();
            return true;
        }

        return false;
    }

    /**
     * @param $columns
     * @param $values
     * @return mixed
     */
    public function whereIn($columns,$values): mixed
    {
       return  $this->folderRepository->whereIn($columns,$values);
    }

    public function findByUser($id, $userId)
    {
        return  $this->folderRepository->findByUser($id,$userId);
    }
}
