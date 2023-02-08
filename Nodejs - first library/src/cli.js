import fs, { lstat } from "fs";
import { get } from "http";
import getFile from "../index.js";

const path = process.argv;

function printList(list, fileName = "") {
  console.log("Link list:", fileName, list);
}

try {
  fs.lstatSync(path);
} catch (error) {
  if (error.code === "ENOENT") {
    console.log("File or directory doesn't exist");
  }
}

async function processText(argument) {
  const path = argument[2];

  if (fs.lstatSync(path).isFile()) {
    const result = await getFile(argument[2]);
    printList(result);
  } else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);
    files.forEach(async (Element) => {
      const list = await getFile(`${path}/${Element}`);
      printList(list, Element);
    });
  }
}

processText(path);
