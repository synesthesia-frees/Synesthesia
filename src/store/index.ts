import Vue from 'vue'
import Vuex from 'vuex'

import stream from './stream'
import config from './config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stream,
    config
  }
})
