import Vue from 'vue'
import Vuex from 'vuex'

import stream from './stream'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stream
  }
})
