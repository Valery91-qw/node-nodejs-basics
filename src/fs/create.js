import { writeFile } from "fs";
import { pathToExistDir, errorMessage } from "./fs.constants.js";
import {join} from "path";
const fileName = "fresh.txt";
const content = "I am fresh and young";
export const create = async (existDir, fileName, content) => {
  writeFile(
      join(existDir, fileName),
      content,
      {flag: 'wx'},
      (err) => {
        if (err) {
          throw new Error(errorMessage);
        }
      });
};

create(pathToExistDir, fileName, content);