<?php

namespace App\Services\MediaServices;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Repositories\Media\Interfaces\MediaRepositoryInterface;

class MediaServices
{
    protected $mediaRepository;
    /**
     * MediaServices  constructor.
     *
     * @param MediaRepositoryInterface $mediaRepository
     */
    public function __construct(MediaRepositoryInterface $mediaRepository)
    {
        $this->mediaRepository = $mediaRepository;
    }

    //private member function to create record
    private function createImage($object , $data)
    {
        $formattedSize = $this->formatBytes($data['size']);
        $object->image()->create([
            'path'      => $data['path'],
            'name'      => $data['name'],
            'hash_name' => $data['hash_name'],
            'disk'      => $data['disk'],
            'size'      => $formattedSize,
            'type'      => $data['type'],
        ]);
    }
    public function addImage($object, $data)
    {
        if (!is_array($data)) {
            $data = [$data];
        }
        if (!empty($data)) {
            foreach ($data as $imageData) {
                $data = $this->formatImageData($imageData, 'image');
                $this->createImage($object , $data);
            }
        }
    }

    public function deleteImages($object)
    {
        $images=$object->image;
        foreach ($images as $image) {
            Storage::delete($image->path);
        }
        $object->image()->delete();
    }

    public function duplicateImage($oldObject,$duplicateObject)
    {
        $images=$oldObject->image;
        foreach ($images as $image) {
            $duplicateObject->image()->create([
                'path'  =>    $image->path,
                'name'  =>    $image->name,
                'disk'  =>    $image->disk,
                'size'  =>    $image->size,
                'type'  =>    $image->type,
            ]);
        }
    }

    public function addComponentImage($value,$imageData)
    {
        $formattedSize = $this->formatBytes($imageData['imageSize']);
        $value->image()->create([
            'path'=>$imageData['imagePath'],
            'name'=>$imageData['imageName'],
            'disk'=>$imageData['disk'],
            'size'=>$formattedSize,
            'type'=>$imageData['type']
        ]);
    }

    public function updateMedia($object , $images = [] , $files = [] )
    {
        if($object->image())
        {
            $object->image()->delete();
        }
        if (!is_array($images)) {
            $images = [$images];
        }
        if (!is_array($files)) {
            $files = [$files];
        }
        if (!empty($images)) {
            foreach ($images as $image) {
                $data = $this->formatImageData($image, 'image');
                $this->createImage($object , $data);
            }
        }
        if (!empty($files)) {
            foreach ($files as $file) {
                $data = $this->formatImageData($file, 'file');
                $this->createImage($object , $data);
            }
        }
    }

    public function findOneImageById($id)
    {
        return $this->mediaRepository->findBy(['id' => $id]);
    }

    public function deleteImage($id)
    {
        $this->mediaRepository->delete($id);
    }


    /**
     * @param $bytes
     * @param $precision
     * @return string
     */
    private function formatBytes($bytes, $precision = 2): string
    {
        $units = array('B', 'KB', 'MB', 'GB', 'TB');

        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);

        return round($bytes, $precision) . ' ' . $units[$pow];
    }
    private function formatImageData($image,  $type )
    {
        $path=$image->store('images/user_' . Auth::id() . '_images', 'public');
        return [
            'name' => $image->getClientOriginalName(),
            'hash_name' => basename($path),
            'path' => $path,
            'size' => $image->getSize(),
            'disk' => 'public',
            'type' => $type,
        ];
    }
}
