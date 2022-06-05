import { existsSync , mkdir, copyFile , readdir , cp } from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';
const pathToDirectory = dirname(fileURLToPath(import.meta.url)) + '/files/';
const pathToDestination = dirname(fileURLToPath(import.meta.url)) + '/files_copy/';
const ErrorMessage = 'FS operation failed';

export const copy = async (existDir, target) => {
  if (existsSync(target) || !existsSync(existDir)) {
    throw new Error(ErrorMessage);
  }
  mkdir(target, (err) => {
    if (err) return err;
    readdir(pathToDirectory, (err, files) => {
      if (err) return err;
      files.forEach((file) => {
        copyFile(pathToDirectory + file, pathToDestination + file, (err) => {
          if(err) return err;
        })
      })
    })
  })
};

copy(pathToDirectory, pathToDestination)