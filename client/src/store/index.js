// import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue';
import Vuex from 'vuex';
import authentiction from './authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {

  },
  modules: {
    authentiction,
  },
  mutations: {

  },
  actions: {

  },
  // plugins: [
  //   createPersistedState(),
  // ],
});
