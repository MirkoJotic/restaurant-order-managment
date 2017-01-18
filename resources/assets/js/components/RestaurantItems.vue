<template>
  <div>
      <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'restaurant.items.nested.create' })">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>

    <restaurantMenuList></restaurantMenuList>
    <!--<div v-show="$route.name.indexOf('restaurant.items') === -1">-->
    <modal v-if="$route.name.indexOf('restaurant.items.nested') !== -1" @close="$router.push({ name: 'restaurant.items' })">
      <div slot="body">
        <router-view class="child"></router-view>
      </div>
    </modal>
  </div>
</template>

<script>
  export default {
    mounted() {
    },
    data: function() {
      return {
        showModal: false
      }
    }
  }
</script>