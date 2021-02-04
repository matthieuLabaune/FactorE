const users = [
    {
        username: "emilie",
      password: "lol"
    },
    {
        username: "marc",
      password: "ok"
    }
  ];
  
//   /**
//    * @param {String} email
//    * @param {String} password
//    *
//    * @return {?Object}
//    */
  function login(username, password) {
    return users.find(user => user.username === username && user.password === password) || null;
  }
  
  export { login };