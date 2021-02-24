import * as fs from 'fs';
import { global } from './configs/global';
import { NoFileError } from './errors/no-file-error';
import { createChainfile } from './modules/default-chain';

class Chainson {
  private fileLocation: string;
  private output: string;

  constructor(fileLocation = 'chainfile', output = 'NORMAL') {
    this.fileLocation = fileLocation + '.json';
    this.output = output;
    this.init();
  }

  /**
   * Initializes the database, runs checks and sets everything up.
   */
  private init(): void {
    this.createFile();
  }

  /**
   *
   * @param message the message that needs to be logged
   * @param level verbose/normal/crucial
   */
  private log(message: string, level = 'VERBOSE') {
    // TODO: Implement a way to only show errors based on the level
    // TODO: refactor log('...', 'VERBOSE) to verboseLog
    // console.log(`${message}`);
  }
}

export = Chainson;
