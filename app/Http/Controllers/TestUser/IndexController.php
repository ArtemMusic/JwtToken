<?php

namespace App\Http\Controllers\TestUser;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestUser\TestUserResource;
use App\Models\TestUser;

class IndexController extends Controller
{
    public function __invoke()
    {
        return TestUserResource::collection(TestUser::all());
    }
}
