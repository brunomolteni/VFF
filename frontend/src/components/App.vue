<template>
  <section>
    <slot>
      <am-search-results></am-search-results>
    </slot>
  </section>
</template>

<script>
  import Promise from 'promise-polyfill'; // promise polyfill
  import 'whatwg-fetch'; // fetch polyfill

  if (!window.Promise) {
    window.Promise = Promise;
  }
  export default {
    mounted() {
    }
  }
</script>

<style>
  html { 
    font-size: 62.5%;
  } 
  body {
    font-family: Helvetica, sans-serif;
  }
  a{
    text-decoration: none;
    color: #6991e8;
  }
  a:hover{
    color: #083aa8;
  }
  .strong{
    font-weight: bold;
  }
  .card{
    border-radius: 2px;
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);
  }
</style>
