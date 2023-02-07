import fs from "fs";
import chalk from "chalk";

function treatError(error) {
  throw new Error(chalk.red(error.code, "Error detected"));
}

function getFile(filePath) {
  const encoding = "utf-8";
  fs.promises
    .readFile(filePath, encoding)
    .then((content) => console.log(chalk.green(content)))
    .catch(treatError);
}

getFile("./arquivos/texto.md");
