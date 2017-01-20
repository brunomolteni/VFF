module.exports = {
  title: 'Examen Almundo',
  resolve: true,
  proxy: 'http://localhost:5000',
  mergeConfig: {
  	resolve: {
  	  alias: {
  	    'vue': 'vue/dist/vue.common.js'
  	  }
    }
  },
  static: [
    {from: './static', to: './'}
  ]
}
