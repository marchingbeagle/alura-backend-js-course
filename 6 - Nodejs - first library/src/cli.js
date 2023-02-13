import fs, { lstat } from "fs";
import { get } from "http";
import getFile from "../index.js";
import validateList from "./httpValidation.js";

const path = process.argv;

async function printList(validate, list, fileName = "") {
  if (validate) {
    console.log("Validate link list:", fileName, await validateList(list));
  } else {
    console.log("Link list:", fileName, list);
  }
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
  const validate = argument[3] === "--validate";

  if (fs.lstatSync(path).isFile()) {
    const result = await getFile(argument[2]);
    printList(validate, result);
  } else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);
    files.forEach(async (Element) => {
      const list = await getFile(`${path}/${Element}`);
      printList(validate, list, Element);
    });
  }
}

processText(path);
