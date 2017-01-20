
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
const start = Vue.component('start', require('./components/Main.vue'));
const mainOrder = Vue.component('mainOrder', require('./components/MainOrder.vue'));
const mainRestaurant = Vue.component('mainRestaurant', require('./components/MainRestaurant.vue'));
const restaurantMenuList = Vue.component('restaurantMenuList', require('./components/RestaurantMenuList.vue'));
const restaurantMenuListItem = Vue.component('restaurantMenuListItem', require('./components/RestaurantMenuListItem.vue'));
const restaurantItems = Vue.component('restaurantItems', require('./components/RestaurantItems.vue'));
const restaurantItemForm = Vue.component('restaurantItem', require('./components/RestaurantItemForm.vue'));


Vue.component('modal', require('./components/Modal.vue'));
Vue.component('order-menu', require('./components/OrderMenu.vue'));
Vue.component('order-menu-item', require('./components/OrderMenuItem.vue'));
Vue.component('isotope', require('vueisotope'));
Vue.component('order-cart', require('./components/OrderCart.vue'));

import store from './store/store';

Vue.debug = true;

var router = new VueRouter({
  routes:
  [
      { path: '/', name: 'start', component: start },
      { path: '/order', name: 'order', component: mainOrder },
      { path: '/restaurant', name: 'restaurant', component: mainRestaurant,
        children: [
          { path: 'items', name: 'restaurant.items', component: restaurantItems,
            children: [
              { path: 'create', name:'restaurant.items.nested.create', component: restaurantItemForm },
              { path: ':id/edit', name: 'restaurant.items.nested.edit', component: restaurantItemForm }
            ]
          }
        ]
      }
  ]
});

const app = new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h('router-view')
});

