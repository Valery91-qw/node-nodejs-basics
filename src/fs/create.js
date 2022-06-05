import { writeFile } from "fs";
import { pathToExistDir, errorMessage } from "./fs.constants.js";
const fileName = 'fresh.txt';
const content = 'I am fresh and young';
export const create = async (existDir, fileName, content, error) => {
  writeFile(
      `${existDir}/${fileName}`,
      content,
      {flag: 'wx'},
      (err) => {
        if (err) {
          throw new Error(error);
        }
      });
};

create(pathToExistDir, fileName, content, errorMessage);