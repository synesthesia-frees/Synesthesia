import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { RootState } from '@/types/state';
import stream from './stream'
import config from './config'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
      version: '1.0.0'
  },
  modules: {
      stream,
      config
  }
};

export default new Vuex.Store<RootState>(store);
