<?php

namespace App\Http\Controllers;


use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/*
this a parrent class that controls all other child class controllers 
that will be created in this project, this where request are authorisation to 
the application are validated and authorise
*/

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}
