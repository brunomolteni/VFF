<template>
	<article class="am-hotel card">
		<div class="image-container">
			<img class="image" :src="img" :alt="name"> 
		</div>
		<div class="info">
			<h3 class="title" v-once>{{name}}</h3>
			<am-rating :stars="stars"></am-rating>
		</div>
		<div class="price-info">
			<p>Price per night</p>
			<p class="price">{{currency}} <span class="strong">{{price}}</span></p>
			<p>Taxes not included</p>
			<am-button big>View hotel</am-button>
			<p class="strong">Paid in destination</p>
		</div>
		<div v-if="promo" class="promo">{{promo}}% <br/> OFF</div>
	</article>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      price: {
      	type: Number,
      	required: true
      },
      stars: {
      	type: Number,
      	default: 0
      },
      img: {
      	type: String,
      	default: '/images/placeholder.jpg'
      },
      promo: Number,
      currency:{
      	type: String,
      	default: "$"
      }
    }
  }
</script>

<style scoped>
	p{
		margin: 0 0 5px;
	}
	.am-hotel{
		padding: 10px;
		display: flex;
		justify-content: stretch;
		position: relative;
		overflow: hidden;
		flex-direction: column;
		box-sizing: border-box;
	}

	/* http://stackoverflow.com/a/18247357 */
	.image-container{
		overflow: hidden;
		text-align: center;
	}
	.image{
		height: 100%;
		width: auto;
		position: relative;
		left: 100%;
		margin-left: -200%;
	}

	.info{
		flex-grow: 1;
		text-align: center;
	}
	.title{
		font-size: 1.2rem;
	}

	.price-info{
		padding: 0 20px;
		font-size: 0.9rem;
		text-align: center;
	}
	.price-info .am-button{
		display: block;
		margin: 10px 0;
	}
	.price{
		font-size: 1.8rem;
		color: #c97d17;
		margin: 10px 0 ;
	}
	.price .strong{
		font-size: 2.2rem;
		line-height: 1.8rem;
	}
	@media (min-width: 450px){
		.am-hotel{
	      flex-direction: row;
	      height: 150px;
	    }
	    .am-hotel .image-container{
	      max-width: 30%;
	    }
	    .info{
	    	margin-left: 20px;
	    	text-align: left;
	    }
	    .title{
			margin: 0;
	    }
	    .price-info{
	    	flex-basis: 150px;
			border-left: 1px dashed #ccc;
	    }
	}
</style>