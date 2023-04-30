<?php

namespace App\Http\Controllers;

use App\Models\Pengguna;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePenggunaRequest;
use App\Http\Requests\UpdatePenggunaRequest;
use App\Http\Resources\PenggunaResource;

class PenggunaController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return PenggunaResource::collection(Pengguna::query()->orderBy('id_user','desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePenggunaRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $pengguna = Pengguna::create($data);

        return response(new PenggunaResource($pengguna), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pengguna $pengguna)
    {
        return new PenggunaResource($pengguna);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePenggunaRequest $request, Pengguna $pengguna)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $pengguna->update($data);
        return new PenggunaResource($pengguna);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pengguna $pengguna)
    {
        $pengguna->delete();
        return response("", 204);
    }
}
