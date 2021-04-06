const { createFile } = require("./helpers/multiply");
const argv = require('./config/yargs');

console.clear();


createFile(argv.b, argv.l, argv.L)
  .then((e) => console.log(`Succesful, ${e}`))
  .catch((error) => console.log("error catch, ", error));
