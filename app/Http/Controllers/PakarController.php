<?php

namespace App\Http\Controllers;

use App\Models\Pakar;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePakarRequest;
use App\Http\Requests\UpdatePakarRequest;
use App\Http\Resources\PakarResource;

class PakarController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return PakarResource::collection(Pakar::query()->orderBy('id_pakar','desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePakarRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $pakar = Pakar::create($data);

        return response(new PakarResource($pakar), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pakar $pakar)
    {
        return new PakarResource($pakar);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePakarRequest $request, Pakar $pakar)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $pakar->update($data);
        return new PakarResource($pakar);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pakar $pakar)
    {
        $pakar->delete();
        return response("", 204);
    }
}
