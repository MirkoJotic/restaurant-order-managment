<template>
  <div>
    <span>{{ item.name }}</span>
    <span>{{ item.description }}</span>
    <span>{{ item.amount }}</span>
  </div>
</template>

<script>
  export default {
    mounted() {

    },
    props: ['item']
  }
</script>