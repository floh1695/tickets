'use strict';

const prompt = require('prompt');

//* ()
const welcome = () => {
  const welcomeMessage = 'Welcome to Tickets!';
  console.log(welcomeMessage);
}

const askForUserData = () => {
  const schema = {
    properties: {
      username: {
        pattern: /^[a-zA-Z]+$/,
        message: 'Userame may only be letters',
        require: true,
      },
      password: {
        pattern: /^[a-zA-Z]+$/,
        message: 'Password may only be letters',
        hidden: true,
        required: true,
      },
    }
  };

  const map = f => {
    prompt.start();

    const lock = {};
    let result = lock;
    prompt.get(schema, (_, r) => result = f(r));
    while (result === lock) {
      /* Wait until we recieve a result */
    }
    return {
      map: f => f();
    }
  };

  const userData = {
    map,
  };

  return userData;
};

const main = () => {
  welcome();
  askForUserData()
    .map(userData => {
      console.log(userData);
    });
};

main();

