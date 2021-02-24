import * as fs from 'fs';
import { global } from '../configs/global';
import { createChainfile } from './default-chain';
import { runValidateChecks } from './validate-file';

export async function createFile(chainLocation: string) {
  const fileExists = await runValidateChecks(chainLocation);
  if (!fileExists) {
    await fs.promises.writeFile(chainLocation, createChainfile(global.version));
  }
}
