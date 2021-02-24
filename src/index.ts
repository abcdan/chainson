import { createFile } from './modules/storage';
class Chainson {
  private chainLocation: string;
  private output: string;

  constructor(chainLocation = 'chainfile', output = 'NORMAL') {
    this.chainLocation = chainLocation + '.json';
    this.output = output;
    this.init();
  }

  /**
   * Initializes the database, runs checks and sets everything up.
   */
  private init(): void {
    createFile(this.chainLocation);
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
