import {existsSync, readFile} from "fs";
import {join} from "path";
import {pathToExistDir, errorMessage} from "./fs.constants.js";

const existFile = join(pathToExistDir, "fileToRead.txt");

export const read = async (pathToFile) => {
  if(!existsSync(pathToFile)) throw new Error(errorMessage);
  readFile(pathToFile, {encoding: "utf8"} ,(err, data) => {
    if(err) return err;
    console.log(data);
  })
};

read(existFile)