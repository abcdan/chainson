import * as fs from 'fs';
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
  const data = JSON.parse(fs.readFileSync(chainLocation, 'utf8')) as Chainfile;
  data.chain = jsonToMap(data.chain);
  return data;
}

/**
 * Convert the raw JSON chain into the map that you can work with
 * @tutorial https://stackoverflow.com/a/62198615/6257811
 * @param chainJson chain json data
 */
function jsonToMap(chainJson: object) {
  // TODO: make it infinitely dimentional { { { { { } } } } }
  const dataMap = new Map(Object.entries(chainJson));
  const resultMap = new Map();
  for (const key of dataMap.keys()) {
    const keyMap = new Map(Object.entries(dataMap.get(key)));
    resultMap.set(key, keyMap);
  }
  return resultMap;
}

/**
 * Safely write the file the chain to the disk
 * Do not call this function outside of the queue without a proper reason.
 * @param chainLocation chainfile location
 * @param chainfile chainfile contents
 */
export function storeToDisk(chainLocation: string, chainfile: Chainfile): Promise<boolean> {
  const chainJson = JSON.stringify(chainfile);
  return new Promise((resolve, reject) => {
    fs.writeFile(chainLocation, chainJson, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}
