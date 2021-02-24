import * as fs from 'fs';
import { Chainfile } from '../models/chainfile';
import { createChainfile } from './default-chain';

/**
 * Write a fresh chainfile to the disk
 * @param chainLocation location of the chainfile
 */
export function createFile(chainLocation: string) {
  fs.writeFileSync(chainLocation, createChainfile());
}

/**
 * Load the chainfile from the disk
 * @param chainLocation location of the chainfile
 */
export function loadFromDisk(chainLocation: string): Chainfile {
  const data = JSON.parse(fs.readFileSync(chainLocation, 'utf8'));
  data.chain = jsonToMap(data.chain);
  return data as Chainfile;
}

/**
 * Convert the raw JSON chain into the map that you can work with
 * @param chain chain json data
 */
function jsonToMap(chain: object) {
  // TODO: Optimize for speed
  const tempChain = new Map<string, any>()
  for (const [key, value] of Object.entries(chain)) {
    tempChain.set(key, value)
  }
  
  return tempChain;
}

/**
 * Safely write the file the chain to the disk
 * Do not call this function outside of the queue without a proper reason.
 * @param chainLocation chainfile location
 * @param chainfile chainfile contents
 */
export function storeToDisk(chainLocation: string, chainfile: Chainfile): Promise<boolean> {
  const tempChain = chainfile as any;
  tempChain.chain = mapToObject(chainfile.chain)
  const chainJson = JSON.stringify(tempChain)
  console.log(tempChain)
  return new Promise((resolve, reject) => {
    fs.writeFile(chainLocation, chainJson, (err) => {
      console.log(chainLocation);
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

/**
 * Converst a map into an object (to store it)
 * @see https://gist.github.com/lukehorvat/133e2293ba6ae96a35ba#gistcomment-2624332
 * @param map map that needs to be converted
 */
function mapToObject(map: Map<string, any>) {
  return Array.from(map.entries()).reduce((main, [key, value]) => ({...main, [key]: value}), {})
}