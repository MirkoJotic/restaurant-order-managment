<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  public function orderedItems() {
    return $this->belongsToMany('App\MenuItem');
  }
}
