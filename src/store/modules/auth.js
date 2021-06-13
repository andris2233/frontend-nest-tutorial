import { parseToken } from '../../helper/auth';
import auth from '../../api/auth.service';

export default {
  namespaced: true,

  state: () => ({
    userData: parseToken(),
    token: localStorage.getItem('token'),
  }),

  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    setUserData(state, userData) {
      state.userData = userData;
    },
    logout(state) {
      state.userData = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },

  actions: {
    async login({ commit }, form) {
      const response = await auth.login(form);
      const { token } = response;
      commit('setToken', token);
      commit('setUserData', parseToken());
    },
    logout({ commit }) {
      commit('logout');
    },
  },

  getters: {
    isAuthenticated(state) {
      return !!(state.userData && state.token);
    },
  },
};
