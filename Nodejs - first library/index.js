import fs from "fs";
import chalk from "chalk";

function extractLinks(text) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s#.]*.[^\s]*)\)/gm;

  // const capture = text.match(regex)
  // const capture = regex.exec(text);
  const capture = [...text.matchAll(regex)];
  const result = capture.map((capture) => ({
    [capture[1]]: [capture[2]],
  }));
  return result;
}

function treatError(error) {
  throw new Error(chalk.red(error.code, "Error detected"));
}

async function getFile(filePath) {
  try {
    const encoding = "utf-8";
    const content = await fs.promises.readFile(filePath, encoding);
    console.log(extractLinks(content));
  } catch (error) {
    treatError(error);
  }
}
getFile("./arquivos/texto.md");
