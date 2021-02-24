import { createFile } from './modules/storage';
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
    createFile(this.fileLocation);
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
