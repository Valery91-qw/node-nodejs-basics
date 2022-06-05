import {existsSync, rm } from "fs";
import {pathToExistDir, errorMessage} from "./fs.constants.js";
import {join} from "path";
const existFile = join(pathToExistDir, "fileToRemove.txt")
export const remove = async (removeFile) => {
    if(!existsSync(removeFile)) throw new Error(errorMessage);
    rm(removeFile, (err) => {
      return err;
    })
};

remove(existFile);