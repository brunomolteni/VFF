<template>
  <a :href="!disabled && href" v-on:click="!disabled && action && action()" :class="{disabled, big, loading}" class="am-button"><slot></slot></a>
</template>

<script>
  export default {
    props: {
      href: String,
      disabled: Boolean,
      big: Boolean,
      loading: Boolean,
      action: Function
    }
  }
</script>

<style scoped>
  .am-button{
    background-color: #131360;
    text-align: center;
    font-size: 1rem;
    display: inline-block;
    padding: 5px;
    color: white;
    text-decoration: none;
    border-radius: 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .am-button:hover{
    background-color: #2b2bb2;
  }
  .am-button.disabled{
    cursor: not-allowed;
    background-color: #5e5ea2;
  }
  .am-button.big{
    font-size: 1.2rem;
    font-weight: bold;
  }
  .am-button.loading{
    color: transparent;
    position: relative;
  }
  .am-button.loading:after{
    content: '◵';
    color: white;
    position: absolute;
    line-height: 0px;
    top: 50%;
    left: 0;
    width: 100%;
    animation: loader 2s infinite linear;
  }
  @keyframes loader{
    0%{
      content: '◵';
    }
    25%{
      content: '◴';
    }
    50%{
      content: '◷';
    }
    75%{
      content: '◶';
    }
  }
</style>