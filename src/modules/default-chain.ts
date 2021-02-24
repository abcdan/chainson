import { general } from '../configs/general';
import { Chainfile } from '../models/chainfile';
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
    chain: new Map().set('success', true),
  } as Chainfile;

  return JSON.stringify(chainfile);
}

export { createChainfile };
