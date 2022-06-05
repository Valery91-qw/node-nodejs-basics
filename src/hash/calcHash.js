import {readFile} from "fs/promises";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {createHash} from "crypto";

const pathToFile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCalculateHashFor.txt');

const getContent = async (file) => {
  return readFile(file, "utf-8")
      .then(res => res)
}

export const calculateHash = async () => {
    const data = await getContent(pathToFile)
    const hash = await createHash('sha256');
    console.log(hash.update(data).digest('hex'));
};

calculateHash()