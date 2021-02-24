import { general } from '../configs/general';
import { Chainfile } from '../models/chainfile';
import { mapToObject } from './storage';
/**
 * Creates the default chain file if there isn't a file containing the chainfile format
 * It has parameters to fill in the blanks (yes, they are called blank.) of the chainfile.
 * @param version the chainson version
 */
function createChainfile(): string {
  const chainfile = {
    version: general.version,
    createdAt: new Date(),
    updatedAt: new Date(),
    chain: new Map(),
  } as Chainfile;

  chainfile.chain.set('chainsuccess', true)

  // TODO: Clean up
  const tempChain = chainfile as any
  tempChain.chain = mapToObject(chainfile.chain)
  
  return JSON.stringify(tempChain);
}

export { createChainfile };
