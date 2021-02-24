import * as fs from 'fs';
import * as util from 'util';
import { global } from '../configs/global';
import { createChainfile } from './default-chain';

export async function createFile(chainLocation: string) {
  await fs.promises.writeFile(chainLocation, createChainfile(global.version));
}

export async function loadToMemory(chainLocation: string) { 
  const readFile = util.promisify(fs.readFile);
  const chainFile = readFile(chainLocation);
  return chainFile;
}