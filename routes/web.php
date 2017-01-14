<?php
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use \App\MenuItem as Item;
use \App\MenuItemImage as ItemImage;
use \App\Order as Order;
use Illuminate\Support\Facades\Input;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function() {
    return view('index');
});

// ITEMS //

Route::get('/items', function(Request $request) {
  $items = Item::all();
  return response()->json($items);
});
Route::post('/items/create', function(Request $request){
  $item = new Item($request->all());
  $item->save();
  return response()->json($item);
});
Route::post('/items/view', function(Request $request) {
  $item = Item::find($request->get('iid'));
  return response()->json($item);
});
Route::post('/items/update', function(Request $request){
  $item = Item::find($request->get('id'));
  $item->name = $request->get('name');
  $item->description = $request->get('description');
  $item->amount = $request->get('amount');
  $item->save();
  return response()->json($item);
});
Route::post('/items/delete', function(Request $request){
  $item = Item::find($request->get('iid'));
  $result = $item->delete();
  return response()->json($result);
});

// END ITEMS //

// ORDERS //

Route::get('/orders', function(Request $request){
  $orders = Order::where(['status', '=', 'pending'])->sort('created_at')-get();
  return response()->json($orders);
});
Route::post('/orders/create', function(Request $request){
  $order = new Order();
  $order->save();
  $items = $request->get('items');
  foreach ($items as $item) {
    $order->orderedItems()->attach($item);
  }
  return response()->json(['success'=>true]);
});
Route::post('/orders/:id/cancel', function(Request $request, $id){
  $order = Order::find($id);
  $order->status = 'cancel';
  $order->update();
  return response()->json($order);
});

// END ORDERS //

// IMAGES //

Route::get('/items/:id/images', function(Request $request, $id){
  // TODO:
});
Route::get('/items/:id/images/:image_id', function(Request $request, $id, $image_id){
  // TODO:
});
Route::post('/items/:id/images/create', function(Request $request, $id){
  // TODO:
});
Route::post('/items/:id/images/delete', function(Request $request, $id){
  // TODO:
});

// END ORDERS //
