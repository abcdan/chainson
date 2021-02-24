import * as fs from 'fs';
import { CouldNotCreateChainfile } from '../errors/chainfile/could-not-create-chainfile';
import { Chainfile } from '../models/chainfile';
import { createChainfile } from './default-chain';

/**
 * Write a fresh chainfile to the disk
 * @param chainLocation location of the chainfile
 */
export async function createFile(chainLocation: string) {
  await fs.promises.writeFile(chainLocation, createChainfile());
}

/**
 * Load the chainfile from the disk
 * @param chainLocation location of the chainfile
 */
export function loadFromDisk(chainLocation: string): Chainfile {
  let chainData = { } as Chainfile
  fs.readFile(chainLocation, 'utf-8', function read(err, data) {
    if (err) {
      throw new CouldNotCreateChainfile();
    }
    const chainfile = JSON.parse(data) as Chainfile;
    chainData = chainfile;
  });
  return {} as Chainfile
}
