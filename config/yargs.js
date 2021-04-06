const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    type: "number",
    describe: "Base to multiply"
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "List multiply"
  })
  .option("L", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Limit multiply"
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.L)) {
      throw "Error base to be number";
    }
    return true;
  })
  .argv;

module.exports = argv;