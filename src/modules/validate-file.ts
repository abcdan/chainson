import * as fs from 'fs';

// TODO: Move file exists here
// TODO: Check if existing file is readable here
// TODO: Check if existing file is writable here

/**
 * Runs checks related to the chainfile itself. Ensuring it can be created/edited/read
 * @param chainLocation chainfile location
 */
export async function runValidateChecks(chainLocation: string) {
  await checkChainExists(chainLocation);

  // TODO: Instead of returning true/false, make it throw errors
  return true;
}

async function checkChainExists(chainLocation: string) {
  return fs.existsSync(chainLocation);
}
