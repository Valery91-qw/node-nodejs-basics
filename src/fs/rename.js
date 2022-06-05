import { join } from "path";
import { rename as renameFs, existsSync } from "fs";
import {pathToExistDir, errorMessage} from "./fs.constants.js";
const existFile = join(pathToExistDir, "wrongFilename.txt");
const fileName = join(pathToExistDir, "properFilename.md");

export const rename = async (currentFile, destFile) => {
  if(!existsSync(currentFile) || existsSync(destFile)) {
    throw new Error(errorMessage);
  }
  renameFs(currentFile, destFile, (err) => {
    if(err) return err;
  })
};

rename(existFile, fileName)