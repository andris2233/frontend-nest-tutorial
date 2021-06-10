import Vue from 'vue';
import App from './App.vue';
import api from './api/main';

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
