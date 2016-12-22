<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{

    protected $fillable = ['name', 'description', 'amount'];

    public function itemImages() {
      return $this->hasMany('App\MenuItemImage');
    }
}
