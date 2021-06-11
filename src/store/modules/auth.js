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
  },

  actions: {
    login({ commit }, form) {
      auth.login(form).then((response) => {
        const { token } = response;
        commit('setToken', token);
        commit('setUserData', parseToken());
      });
    },
  },
};
