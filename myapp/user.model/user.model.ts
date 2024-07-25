module.exports = (id, myIRC) => {
    const User = myIRC.define("users", {
      username: {
        type: myIRC.STRING
      },
      email: {
        type: myIRC.STRING
      },
      password: {
        type: myIRC.STRING
      }
    });
    return User;
  };