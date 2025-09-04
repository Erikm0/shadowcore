<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'collection' => 'required|string|max:255',
            'description' => 'required|string',
            'image_url' => 'required|string|max:255',
            'color' => 'required|string|max:255',
            'size' => 'required|string',
            'material' => 'required|string|max:255',
            'price' => 'required|numeric',
            'GSM' => 'required|integer',
            'stock' => 'required|integer|min:0',
        ]);

        $product = Product::create($validated);

        return response()->json([
            'message' => 'Termék sikeresen feltöltve!',
            'product' => $product,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return response()->json([$product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'collection' => 'required|string|max:255',
            'description' => 'required|string',
            'image_url' => 'required|string|max:255',
            'color' => 'required|string|max:255',
            'size' => 'required|integer',
            'material' => 'required|string|max:255',
            'price' => 'required|integer',
            'GSM' => 'required|integer',
            'stock' => 'required|integer',
        ]);

        $product->update($validated);

        return response()->json([
            'message' => 'Sikeres frissítés',
            'product' => $product,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'message' => 'Sikeresen törlésre került a '.$product.'termék',
        ]);
    }

    /**
     * Extra product
     */
    public function showByName($name)
    {
        $product = Product::where('name', $name)->firstOrFail();
        return response()->json($product);
    }
}
