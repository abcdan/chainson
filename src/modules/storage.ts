import * as fs from 'fs';
import { global } from '../configs/global';
import { createChainfile } from './default-chain';

export async function createFile(chainLocation: string) {
  await fs.promises.writeFile(chainLocation, createChainfile(global.version));
}
