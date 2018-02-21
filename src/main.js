// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vuetify
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/cssLib/googleFont.css'
import '../node_modules/vuetify/src/stylus/main.styl'
import './assets/css/style.css'

// store
import {store} from './store'

// firebase
import {config} from './firebase/config'
const firebase = require('firebase')

Vue.config.productionTip = false
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.state.gen.firebaseApp = firebase.initializeApp(config)
    this.$store.state.gen.storage = firebase.storage()
  }
})
