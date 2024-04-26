<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Services\VendorServices\VendorServices;
use App\Services\MediaServices\MediaServices;

use Illuminate\Validation\ValidationException;

class VendorServiceController extends Controller
{
    protected VendorServices $vendorServices;
    protected MediaServices $mediaServices;

    protected $images = [];
    protected $service;

    /**
     * @param VendorServices $vendorServices
     */
    public function __construct(VendorServices $vendorServices , MediaServices $mediaServices)
    {
        $this->vendorServices = $vendorServices;
        $this->mediaServices = $mediaServices;
    }

    public function createService(Request $request): JsonResponse
    {
        
        try {
            
            $data = $this->validate($request, [
                        'name' => 'required',
                        'currency' => 'required',
                        'price' => 'required|numeric|min:0',
                        'area' => 'required',
                        'description' => 'nullable',
                        'user_id' => 'required|exists:users,id',
                    ]);
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }
        $this->service = $this->vendorServices->create($data);
        //for later use
        $this->mediaServices->addImage($this->service, $this->images);
        return response()->json(['message' => 'Service created successfully'], 201);
    }



    public function getAllServices(Request $request): JsonResponse
    {
        try {
            $this->validate($request, [
                'user_id' => 'required|exists:users,id',
            ]);
            $userId = $request->input('user_id');
            if (!$userId) {
                return response()->json(['error' => 'User ID is required'], 400);
            }
            $services = Service::where('user_id', $userId)->get();
            return response()->json($services, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], $e->getCode());
        }
    }

}

