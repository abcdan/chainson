import * as fs from 'fs';
import * as util from 'util';
import { global } from '../configs/global';
import { createChainfile } from './default-chain';

/**
 * Write a fresh chainfile to the disk
 * @param chainLocation location of the chainfile
 */
export async function createFile(chainLocation: string) {
  await fs.promises.writeFile(chainLocation, createChainfile(global.version));
}

/**
 * Load the chainfile from the disk
 * @param chainLocation location of the chainfile
 */
export async function loadFromDisk(chainLocation: string) { 
  const readFile = util.promisify(fs.readFile);
  const chainFile = readFile(chainLocation);
  return chainFile;
}