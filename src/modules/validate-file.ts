import * as fs from 'fs';
import { NoReadPermissions } from '../errors/file/no-read-permissions';
import { NoWritePermissions } from '../errors/file/no-write-permissions';
import { createFile } from './storage';

// TODO: Make a class out of it with private methods to shield them from the rest of the application
/**
 * Runs checks related to the chainfile itself. Ensuring it can be created/edited/read
 * @param chainLocation chainfile location
 */
export function runValidateChecks(chainLocation: string) {
  const exists = checkChainExists(chainLocation);
  if (!exists) {
    createFile(chainLocation);
  }

  checkRead(chainLocation);
  checkWrite(chainLocation);
}

/**
 * Check if the chainfile exists on the disk
 * @param chainLocation chainfile location
 */
function checkChainExists(chainLocation: string) {
  return fs.existsSync(chainLocation);
}

/**
 * Check if the chainfile is readable
 * @param chainLocation chainfile location
 */
function checkRead(chainLocation: string): boolean {
  fs.access(chainLocation, fs.constants.R_OK, (err) => {
    if (err) {
      throw new NoReadPermissions();
    }
  });
  return true;
}

/**
 * Check if the chainfile is writable
 * @param chainLocation chainfile location
 */
function checkWrite(chainLocation: string): boolean {
  fs.access(chainLocation, fs.constants.W_OK, (err) => {
    if (err) {
      throw new NoWritePermissions();
    }
  });
  return true;
}
