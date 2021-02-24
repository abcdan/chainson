import * as fs from 'fs';
import { global } from '../configs/global';
import { createChainfile } from "./default-chain";
import { runValidateChecks } from './validate-file';


async function createFile(fileLocation: string) {
  const fileExists = await runValidateChecks(fileLocation);
  if (!fileExists) {
  await fs.promises.writeFile(fileLocation, createChainfile(global.version));
  }
}