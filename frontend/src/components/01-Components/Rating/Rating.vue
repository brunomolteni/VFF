<template>
  <div class="am-rating">
    <span v-for="star in stars">★</span>
  </div>
</template>

<script>
  export default {
    props: {
      stars: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped>
  span{
    color: #FFC107;
    font-size: 1.5rem;
    cursor: default;
  }
</style>
