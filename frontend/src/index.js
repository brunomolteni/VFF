import Vue from 'vue'
import App from 'components/App.vue'

// exposing Vue to the world
window.Vue = Vue;

// Register all .vue files as global components with "am-" prefix
let Components = {}
const context = require.context('./components', true, /\.vue$/)
context.keys().forEach(function (key) {
  let componentName = key.match(/\/([^\/]+?)\.vue$/)[1]
  Vue.component('am-'+componentName.toLowerCase(), context(key));
})

//Mount the app
if(document.getElementById('app')){
	new Vue({
	  ...App,
	  el: '#app'
	})
}
