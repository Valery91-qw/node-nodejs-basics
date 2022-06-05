import { createReadStream } from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
const pathToReadFile = join(dirname(fileURLToPath(import.meta.url)), "files", "fileToRead.txt")

export const read = async () => {
    const read = createReadStream(pathToReadFile, {encoding: "utf-8"});
    read.on('data', (data) => {
      process.stdout.write(data)
    })
};

read()