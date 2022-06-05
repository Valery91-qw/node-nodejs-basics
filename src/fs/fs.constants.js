import { dirname , join } from "path";
import { fileURLToPath } from 'url';

export const pathToExistDir = join(dirname(fileURLToPath(import.meta.url)), 'files');
export const errorMessage = 'FS operation failed';