<template>
  <div class="">
      <span>{{ item.name }}</span> | <span>${{ item.amount }}</span>
      <button class="btn btn-primary btn-sm" @click="$router.push({ name:'restaurant.items.nested.edit', params: { id: item.id } })">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </button>
      <button class="btn btn-danger btn-sm"><i class="fa fa-times" aria-hidden="true"></i></button>
  </div>
</template>

<script>
  export default {
    mounted() {

    },
    props: ['item'],
    methods: {
    }
  }
</script>