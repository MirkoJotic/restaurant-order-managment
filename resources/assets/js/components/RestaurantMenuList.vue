<template>
  <div class="">
    <restaurant-menu-list-item v-for="item in items" :item="item"></restaurant-menu-list-item>
  </div>
</template>

<script>
  export default {
    mounted() {

    },
    computed: {
      items: function() {
        return this.$store.getters.getMenuItems
      }
    }
  }
</script>