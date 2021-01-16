import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuOpen: false,
  },
  mutations: {
    mtnMenuOpen(state) {
      state.menuOpen = !state.menuOpen;
    }
  },
  actions: {
    setMenuOpen:({commit}) => {
      commit('mtnMenuOpen');
    }
  },
  modules: {
  }
})
