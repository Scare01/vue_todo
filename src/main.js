import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App.vue';
import store from './store/store';

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
