'use strict';

const prompt = require('prompt');

//* () -> IO ()
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
    const results = prompt.get(schema, (_, r) => f(r));
    console.log(prompt.getInput());
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

