import Vue from 'vue'
import getAuthentication from "./getAuthentication";
import AuthWrapper from "./components/AuthWrapper";
import AuthPlugin from "./plugin";

Vue.use(AuthPlugin, {
  auth: getAuthentication([
    {
      username: "marc",
      password: "ok"
    },
    {
      username: "test",
      password: "test"
    }
  ])
});

new Vue({
  render: h => h(AuthWrapper)
}).$mount("#app");

