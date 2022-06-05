import {existsSync, readdir} from "fs";
import {pathToExistDir, errorMessage} from "./fs.constants.js";


export const list = async (existDir) => {
    if(!existsSync(existDir)) throw new Error(errorMessage);
    readdir(existDir, (err, files) => {
        files.forEach((file) => {
            console.log(file);
        })
    })
};

list(pathToExistDir)