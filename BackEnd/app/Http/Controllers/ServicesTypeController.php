<?php

namespace App\Http\Controllers;

use App\Models\ServicesType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\SubServicesType;


use Illuminate\Validation\ValidationException;

class ServicesTypeController extends Controller
{
    public function getAllServicesType(): JsonResponse
    {
        $servicesTypes = ServicesType::all();
        return response()->json($servicesTypes, 200);
    }

    public function getSubServicesType(Request $request): JsonResponse
    {
        try {
            $this->validate($request, [
                'service_id' => 'required|exists:services_types,id',
                'user_id'    => 'required|exists:users,id',
            ]);
            $subServices = SubServicesType::with(['subServicesTypeItems' => function($query) use ($request) {
                $query->with(['itemPrice' => function($query) use ($request) {
                    $query->where('user_id', $request->input('user_id'));
                }]);
            }])
            ->where('services_type_id', $request->input('service_id'))
            ->get();
            return response()->json($subServices, 200);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => $e->validator->errors(),
            ], 422);
        }
    }
}