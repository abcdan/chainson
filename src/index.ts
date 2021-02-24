import { Chainfile } from './models/chainfile';
import { ChainQueue } from './modules/queue';
import { loadFromDisk } from './modules/storage';
import { runValidateChecks } from './modules/validate-file';

class Chainson {
  private chainLocation: string;
  private output: string;
  private chainQueue: ChainQueue;
  private chain: Chainfile | any;

  constructor(chainLocation = 'chainfile', output = 'NORMAL') {
    this.chainLocation = chainLocation + '.json';
    this.output = output;
    this.init();
    this.chainQueue = new ChainQueue(this.chainLocation);
  }

  /**
   * Initializes the database, runs checks and sets everything up.
   */
   private async init() {
    await runValidateChecks(this.chainLocation);
    this.chain = await loadFromDisk(this.chainLocation);
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

  /**
   * Add a link to the chain
   * @param key key
   * @param value data
   */
  // public add(key: string, value: object) {}
}

export = Chainson;
