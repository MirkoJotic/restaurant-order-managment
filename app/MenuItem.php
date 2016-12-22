<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    public function itemImages() {
      return $this->hasMany('App\MenuItemImage');
    }
}
