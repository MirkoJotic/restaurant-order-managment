<template>
  <div class="container-fluid">
    <!-- ADD NAVIGATION -->
    <div class="row">
      <div class="navigation-menu">
        <!-- <order-navigation></order-navigation> -->
      </div>
    </div>
    <div class="row">
      <div class="orders col-md-9">
        <order-menu :items="items"></order-menu>
      </div>
      <div class="cart-wrapper col-md-3">
        <div class="cart row">
          <order-cart></order-cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('setMenuItems')
    },
    computed: {
      items: function() {
        return this.$store.getters.getMenuItems
      }
    }
  }
</script>

<style>
  .navigation-menu {
    background-color: blue;
    min-height: 10rem;
  }
  .orders {
    background-color: red;
    min-height: 50rem;
  }
  .cart-wrapper {
    min-height: 50rem;
    background-color: grey;
  }
  .cart {
    background-color: green;
    min-height: 40rem;
    margin: 1rem;
  }
</style>
