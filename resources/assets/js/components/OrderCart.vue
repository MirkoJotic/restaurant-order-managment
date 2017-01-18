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
        {{ cartItem(item.id).amount * item.quantity }}
      </span>
    </div>
    <div class="cart-total">
      <span class="cart-total-txt">
        Total:
      </span>
      <span v-if="cart.length > 0" class="cart-total-amount">
        {{ total + ( cartItem(item.id) * item.quantity ) }}
      </span>
      <span class="cart-total-amount" v-else>
        0.00
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log("Cart Ready")
    },
    props: [],
    data: function() {
      return {
        total: 0
      }
    },
    methods: {
      cartItem(id) {
        return this.$store.getters.getMenuItems.find( mi => mi.id === id )
      }
    },
    computed: {
      cart: function() {
        return this.$store.getters.getCartItems
      }
    }
  }
</script>
