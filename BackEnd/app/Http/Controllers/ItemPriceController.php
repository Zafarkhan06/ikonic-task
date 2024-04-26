<?php

namespace App\Http\Controllers;

use App\Models\ServicesType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\SubServicesType;
use App\Models\ItemPrice;
use App\Services\ItemPriceServices\ItemPriceServices;


use Illuminate\Validation\ValidationException;

class ItemPriceController extends Controller
{
    protected ItemPriceServices $itemPriceServices;

    public function __construct(ItemPriceServices $itemPriceServices)
    {
        $this->itemPriceServices = $itemPriceServices;
    }

    public function setItemPrice(Request $request): JsonResponse
    {
        try {
            $this->validate($request, [
                'service_id'             => 'required|exists:services_types,id',
                'user_id'                => 'required|exists:users,id',
                'data'                   => 'required|array', 
                'data.*.sub_service_id'  => 'required|integer', 
                'data.*.items'           => 'required|array', 
                'data.*.items.*.item_id' => 'required_with:data.*.items.*.item_id|integer|min:0', 
                'data.*.items.*.price'   => 'required_with:data.*.items.*.item_id|integer|min:0', 
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => $e->validator->errors(),
            ], 422);
        }
        $data = $request->input();
        $itemPrice = $this->itemPriceServices->create($data);
        return response()->json(['message' => 'Item Price added successfully'], 201);
    }
}