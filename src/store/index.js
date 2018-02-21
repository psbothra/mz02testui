import Vue from 'vue'
import Vuex from 'vuex'
// modules
import gen from './modules/gen'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    gen
  }
})
