import fs from "fs";
import chalk from "chalk";

function treatError(error) {
  throw new Error(chalk.red(error.code, "Error detected"));
}

function getFile(filePath) {
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, (error, content) => {
    if (error) {
      treatError(error);
    }
    console.log(chalk.green(content));
  });
}

getFile("./arquivos/texto.md");
