import Vue from 'vue';
import App from './App.vue';
import api from './api/main';
import store from './store';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
