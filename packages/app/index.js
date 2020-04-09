const first = require('@my-super-first-monorepo/first');

const app = () => 'Hi from the app!!';

const main = () => {
  console.log(app());
  console.log(first());
};

main();

module.exports = { app, main };
