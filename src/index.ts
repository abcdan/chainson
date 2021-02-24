import { ChainQueue } from './modules/queue';
import { createFile } from './modules/storage';
class Chainson {
  private chainLocation: string;
  private output: string;
  private chainQueue: ChainQueue;

  constructor(chainLocation = 'chainfile', output = 'NORMAL') {
    this.chainLocation = chainLocation + '.json';
    this.output = output;
    this.init();
    this.chainQueue = new ChainQueue(this.chainLocation);
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

  public add()
}

export = Chainson;
