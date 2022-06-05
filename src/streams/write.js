import {createWriteStream} from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

const pathToReadFile = join(dirname(fileURLToPath(import.meta.url)), "files", "fileToWrite.txt")

export const write = async () => {
  const writeStream = createWriteStream(pathToReadFile, {encoding: 'utf8'})
  process.stdin.on('data', (data) => {
    writeStream.write(data);
    process.exit();
  })
};

write()