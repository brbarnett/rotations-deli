import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('currency', (value: number): string => {
  if (!value) return '';
  return `$${value.toFixed(2)}`;
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
