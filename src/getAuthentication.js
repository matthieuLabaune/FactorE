import formatUser from "./FormatUser";

// /**
//  * @param {Object[]} users
//  * @param {String}   [lsKey]
//  *
//  * @return {Object}
//  */
export default function getAuthentication(users, lsKey = "user") {
  return {
    // /**
    //  * @return {?Object}
    //  */
    getConnectedUser() {
      const user = localStorage.getItem(lsKey);

      return user ? JSON.parse(user) : null;
    },

    // /**
    //  * @param {String} email
    //  * @param {String} password
    //  *
    //  * @return {?Object}
    //  */
    login(email, password) {
      let user = users.find(user => user.email === email && user.password === password);

      if (user) {
        user = formatUser(user);
        localStorage.setItem(lsKey, JSON.stringify(user));
      }

      return user || null;
    },

    logout() {
      localStorage.removeItem(lsKey);
    }
  };
}