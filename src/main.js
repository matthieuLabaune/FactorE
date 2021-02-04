import Vue from 'vue'
import App from './App.vue'
import AuthWrapper from "./components/AuthWrapper";

Vue.config.productionTip = false

new Vue({
  render: h => h(AuthWrapper)
}).$mount("#app");

// new Vue({
//   render: h => h(App),
// }).$mount('#app');
