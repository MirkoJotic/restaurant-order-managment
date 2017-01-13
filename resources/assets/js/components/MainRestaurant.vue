<template>
  <div>
    <div v-show="$route.name.indexOf('restaurant.items') === -1">
      Restaurant Route
      <router-link to="/restaurant/items"><button class="btn btn-primary">Menu Items</button></router-link>
    </div>
    <router-view class="child"></router-view>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('setMenuItems')
      console.log("MainRestaurant.vue ready!")
    }
  }
</script>