<template>
  <div>
    <div v-for="item in cart">
      <span class="cart-item-name">
        {{ cartItem(item.id).name }}
      </span>
      <span class="cart-item-quantity">
        {{ item.quantity }}
      </span>
      <span class="cart-item-price">
        {{ cartItem(item.id).amount }}
      </span>
    </div>
    <div class="cart-total">
      <span class="cart-total-txt">
        Total:
      </span>
      <span class="cart-total-amount">
        {{ total }}
      </span>
    </div>
    <div v-if="total > 0" class="cart-order">
      <button class="btn" @click.prevent="placeOrder()">Order</button>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
    },
    props: [],
    data: function() {
      return {
      }
    },
    methods: {
      cartItem(id) {
        return this.$store.getters.getMenuItems.find( menu_item => menu_item.id === id )
      },
      placeOrder() {

        //this.$store.dispatch('placeOrder')
      }
    },
    computed: {
      cart: function() {
        return this.$store.getters.getCartItems
      },
      total: function() {
        var total = 0;

        for (var i = this.cart.length - 1; i >= 0; i--) {
           total = total + ( this.cartItem(this.cart[i].id).amount * this.cart[i].quantity )
        }
        total = Math.round(total * 100) / 100
        return total.toFixed(2)
      }
    }
  }
</script>
