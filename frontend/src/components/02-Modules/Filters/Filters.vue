<template>
  <div class="am-filters card">
    <section class="name" :class="{open: name.open}">
      <h4 v-on:click="name.open = !name.open"> Name</h4>
      
      <form v-on:submit.prevent="nameChange">
        <input type="text" name="name" v-model="name.input">
        <am-button :action="nameChange">Accept</am-button>
      </form>
    </section>
    
    <section class="price" :class="{open: price.open}">
      <h4 v-on:click="price.open = !price.open"> Price</h4>
      
      <am-range :min="min" :max="max" :step="100" v-on:change="rangeChange"></am-range>  
    </section>

    <section class="stars" :class="{open: stars.open}">
      <h4 v-on:click="stars.open = !stars.open"> Stars</h4>
      
      <div><input type="checkbox" disabled checked id="all" value="all"> All</div>
      <div><input type="checkbox" v-model="stars.selected" id="5" value="5" v-on:change="emitChange"> <am-rating :stars="5"></am-rating></div>
      <div><input type="checkbox" v-model="stars.selected" id="4" value="4" v-on:change="emitChange"> <am-rating :stars="4"></am-rating></div>
      <div><input type="checkbox" v-model="stars.selected" id="3" value="3" v-on:change="emitChange"> <am-rating :stars="3"></am-rating></div>
      <div><input type="checkbox" v-model="stars.selected" id="2" value="2" v-on:change="emitChange"> <am-rating :stars="2"></am-rating></div>
      <div><input type="checkbox" v-model="stars.selected" id="1" value="1" v-on:change="emitChange"> <am-rating :stars="1"></am-rating></div>
    </section>
  </div>
</template>

<script>

  export default {
    props: {
      min: Number,
      max: Number,
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        name: {
          open: !this.collapsed,
          value: '',
          input: ''
        },
        price: {
          open: !this.collapsed,
          range: {
            min: 0,
            max: Infinity
          }
        },
        stars: {
          open: !this.collapsed,
          selected: []
        }
      }
    },
    methods:{
      rangeChange(e){
        this.price.range[e.name] = e.value;
        this.emitChange();
      },
      nameChange(){
        this.name.value = this.name.input.toLowerCase();
        this.emitChange();
      },
      emitChange(){
        this.$emit('filter', {
          price: {
            min: Math.min(this.$data.price.range.min,this.$data.price.range.max), 
            max: Math.max(this.$data.price.range.min,this.$data.price.range.max)
          }, 
          name: this.$data.name.value, 
          stars: this.$data.stars.selected
        });
      },
      toggleAll(){
        this.name.open = !this.name.open;
        this.price.open = !this.price.open;
        this.stars.open = !this.stars.open;
      }
    }
  }
</script>

<style scoped>
  section{
    padding: 10px 10px 20px;
    border-bottom: 3px solid #eee;
    max-height: 0px;
    transition-duration: 0.4s;
    overflow: hidden;
    position: relative;
  }
  section:last-child{
    border: none;
  }
  section.open{
    max-height: 100vh;
  }
  section h4{
    display: block;
    margin: 0;
    position: relative;
    padding: 10px 15px;
    color: #1b71bd;
    cursor: pointer;
    margin-top: -10px;
  }
  section h4:before{
    position: absolute;
    left: 0;
    display: block;
    width: 10px;
    text-align: center;
    font-size: 1rem;
    line-height: 1rem;
  }
  .name h4:before{
    content: '⚲';
    transform: rotate(-45deg);
    font-size: 1.5rem;
  }
  .price h4:before{
    content: '$';
  }
  .stars h4:before{
    content: '★';
  }
  h4:after{
    content: '▲';
    position: absolute;
    right: 0;
    color: darkblue;
    transform: scaleY(0.7) rotate(180deg);
    transition-duration: 0.5s;
    color: #1b71bd;
  }
  .open h4:after{
    transform: scaleY(0.7);
  }
  .name form{
    display: flex;
  }
  .name input{
    border-radius: 1px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(0,0,0,0.5) inset; 
    height: 21px;
    margin-right: 10px;
    flex-grow: 1;
  }
  .price .range{
    width: 98%;
  }
  .stars .am-rating{
    display: inline;
  }
</style>
