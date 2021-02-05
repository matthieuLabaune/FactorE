export default {
    install: (Vue, { auth }) => {
      Vue.prototype.$auth = new Vue({
        data() {
          return {
            user: null
          };
        },
  
        methods: {
          init() {
            this.user = auth.getConnectedUser();
          },
  
          login(email, password) {
            this.user = auth.login(email, password);
          },
  
          logout() {
            auth.logout();
            this.user = null;
          }
        }
      });
    }
  };