import * as fs from 'fs';

// TODO: Move file exists here
// TODO: Check if existing file is readable here
// TODO: Check if existing file is writable here

/**
 * Runs checks related to the chainfile itself. Ensuring it can be created/edited/read
 * @param fileLocation chainfile location
 */
export async function runValidateChecks(fileLocation: string) {
  await checkChainExists(fileLocation)

  // TODO: Instead of returning true/false, make it throw errors
  return true
}

async function checkChainExists(fileLocation: string) {
  return fs.existsSync(fileLocation);
}