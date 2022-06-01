import { writeFile } from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';
const PathToDirectory = dirname(fileURLToPath(import.meta.url)) + '/files/';
const fileName = 'fresh.txt';
const content = 'I am fresh and young';
const ErrorMessage = 'FS operation failed';

export const create = async () => {
  writeFile(
      PathToDirectory + fileName,
      content,
      {flag: 'wx'},
      (err) => {
        if (err) {
          throw new Error(ErrorMessage);
        }
      });
};

create();