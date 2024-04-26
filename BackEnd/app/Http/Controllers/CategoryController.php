<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Services\CategoryServices\CategoryServices;
use App\Services\UserServices\UserServices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    protected CategoryServices $categoryServices;
    protected UserServices $userServices;

    /**
     * @param CategoryServices $categoryServices
     * @param UserServices $userServices
     */
    public function __construct(CategoryServices $categoryServices, UserServices $userServices)
    {
        $this->categoryServices = $categoryServices;
        $this->userServices = $userServices;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->only('id');

        $user = $this->userServices->findOneUserBy(['id' => Auth::id()]);

        $user->categories()->sync($data['id']);

        return response()->json('Added Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function get()
    {
        $user = $this->userServices->findOneUserBy(['id' => Auth::id()]);

        $categories = $user->categories()->get();

        return response()->json(['categories' => $categories]);
    }

    /**
     * Display the specified resource.
     */
    public function all()
    {
        $categories = $this->categoryServices->all();

        return response()->json(['categories' => $categories]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
