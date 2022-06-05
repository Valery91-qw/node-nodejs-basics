import { existsSync , mkdir, copyFile , readdir } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import {pathToExistDir, errorMessage} from "./fs.constants.js"
const pathToDestDir = join(dirname(fileURLToPath(import.meta.url)), 'files_copy');

export const copy = async (existDir, target, errorMessage) => {
  if (existsSync(target) || !existsSync(existDir)) {
    throw new Error(errorMessage);
  }
  await mkdir(target, (err) => {
    if (err) return err;
  });
  await readdir(existDir, (err, files) => {
    if (err) return err;
    files.forEach((file) => {
      copyFile(join(existDir, file), join(target, file) , (err) => {
        if(err) return err;
      })
    })
  })
};

copy(pathToExistDir, pathToDestDir, errorMessage)