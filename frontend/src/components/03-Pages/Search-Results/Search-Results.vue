<template>
  <div class="am-search-results">
    <aside v-if="hotels.length">
      <am-map></am-map>
      <am-filters v-on:filter="applyFilters" :min="minPrice-1" :max="maxPrice+1" :collapsed="collapsed"></am-filters>
    </aside>
    <section v-if="hotels.length">
      <transition-group name="hotels" appear>
        <am-hotel v-for="hotel in filteredHotels" :name="hotel.name" :price="hotel.price" :stars="hotel.stars" key="hotel.id"></am-hotel>
      </transition-group>
      <am-button big :loading="isLoading" :action="loadMore" :disabled="hotels.length == total">Load More</am-button>
    </section>
    <div class="error" v-if="error">
      There was some error
    </div>
  </div>
</template>

<script>
  function fetchApiAndSpitJson(api){
      return fetch(api)
        .then( response => {
          return response.text()
      }).then( body => {
          return JSON.parse(body)
      }).catch(function(e){
          console.error("There was an error with the fetch:", e);
      });
  }
  export default {
    data(){
      return {
        hotels: [],
        filters: false,
        collapsed: window.screen.width < 800 || document.documentElement.clientWidth < 800,
        total: 0,
        error: false,
        isLoading: false
      }
    },
    mounted(){
      fetchApiAndSpitJson('/api/hotels?$sort[price]=1')
      .then( json => {
        if(json){
          this.hotels = json.hotels
          this.total = json.total
        } else{
          this.error = true;
        }
      })
    },
    methods: {
      applyFilters(e){
        this.filters = e;
      },
      loadMore(){
        this.isLoading = true;
        fetchApiAndSpitJson('/api/hotels?$sort[price]=1&$skip='+this.hotels.length)
        .then( json => {
          if(json){
            this.hotels = this.hotels.concat(json.hotels)
          } else {
            this.error = true;
          }
          this.isLoading = false;
        })     
      }
    },
    computed:{
      filteredHotels(){
        if( this.filters){
          let name = this.filters.name;
          let stars = this.filters.stars;
          let price = this.filters.price || {};

          price.min = price.min || 0;
          price.max = price.max || Infinity;

          return this.hotels
                          .filter(hotel => (stars.length ? stars.indexOf(hotel.stars+'') > -1 : true) )
                          .filter(hotel => (price.min < hotel.price && hotel.price < price.max) )
                          .filter(hotel => (name !== '' ? hotel.name.toLowerCase().indexOf( name ) > -1 : true) )
        } else return this.hotels;
      },
      minPrice(){
        return Math.min(...this.hotels.map(el=>el.price));
      },
      maxPrice(){
        return Math.max(...this.hotels.map(el=>el.price));
      }
    }
  }
</script>

<style>
  .hotels-enter-active{
    transition: all 0.5s;
  }
  .hotels-enter{
    opacity: 0;
    transform: translateX(-30px);
  }
  .card{
    margin-bottom: 20px;
  }
  .am-search-results > section > .am-button{
    flex-grow: 1;
    margin: 0 auto 10px;
    display: block;
  }
  .am-search-results .am-map img{
    display: none;
  }
  @media (min-width: 800px){
    .am-search-results{
      display: flex;
      width: 100%;
    }
    .am-search-results > aside{
      flex: 0 0 200px;
      margin-right: 20px;
    }
    .am-search-results > section{
      flex: 1 1 10px;
      max-width: calc(100% - 240px );
    }
    .am-search-results > section > .am-button{
      max-width: 100px;
    }
    .am-search-results .am-map img{
      display: block;
    }
  }
</style>
