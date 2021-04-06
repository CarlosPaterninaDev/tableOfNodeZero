const fs = require("fs");
const colors = require('colors');

const createFile = async (number = 5, list, limit) => {
  try {
    let textOutput = "";
    if (list) {
      console.log(`================`.green);
      console.log(` Tabla: ${number}`.red);
      console.log(`================`.green);

      for (let i = 1; i <= limit; i++) {
        textOutput += `${number} x ${i} = ${number * i}\n`;
      }
      console.log(textOutput.trap.rainbow);
    }

    fs.writeFileSync(`./output/table-${number}.txt`, textOutput);
    return "The file has been saved!";

    // fs.writeFile(`table-${number}.txt`,textOutput, (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // }  )
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createFile,
};
