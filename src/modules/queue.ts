import * as EventEmitter from 'events';
import { Chainfile } from '../models/chainfile';

// TODO: Add a way to temporarily block the node thread to ensure everything
//       gets written to the file itself. Or make a smart way of removing the
//       last from the queue if it's not important to get update.

export class ChainQueue extends EventEmitter {
  private chainQueue: Chainfile[];
  private paused: boolean;
  private chainLocation: string;

  constructor(chainLocation: string) {
    super();
    this.chainQueue = [];
    this.paused = false;
    this.chainLocation = chainLocation;
  }

  /**
   * Add a chainfile that needs to be saved to the queue
   * @param chainfile chainfile to add to the queue
   */
  add(chainfile: Chainfile) {
    this.chainQueue.push(chainfile);
    this.store();
  }

  /**
   * Write the next chainfile to the disk from the queue
   */
  async store() {
    while (!this.paused && this.chainQueue.length) {
      const buf = this.chainQueue.shift();
      const chainJson = JSON.stringify(buf);
      try {
        await 
      } catch (e) {
        this.err(e);
      }
    }
  }

  /**
   * Emit an error when something goes wrong
   * @param e error
   */
  err(e: any) {
    this.pause();
    this.emit('error', e);
  }

  /**
   * Pause writing of the chainfiles, when errors.
   */
  pause() {
    this.paused = true;
  }

  /**
   * Resume writing the chainfiles to the disk
   */
  resume() {
    this.paused = false;
    this.store();
  }
}
