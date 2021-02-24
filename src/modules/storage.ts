import * as fs from 'fs';
import { global } from '../configs/global';
import { Chainfile } from '../models/chainfile';
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
  fs.readFile(chainLocation, 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;
    const chainfile = JSON.parse(data) as Chainfile
    console.log(chainfile)
    return chainfile;
  });
}