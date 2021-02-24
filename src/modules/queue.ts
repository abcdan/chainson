import * as EventEmitter from 'events';
import * as fs from 'fs';
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

  // add item to the queue and write (if not already writing)
  add(data: Chainfile) {
    this.chainQueue.push(data);
    this.store();
  }

  // write next block from the queue (if not already writing)
  async store() {
    while (!this.paused && this.chainQueue.length) {
      const buf = this.chainQueue.shift();
      const chainJson = JSON.stringify(buf);
      try {
        await fs.writeFile(this.chainLocation, chainJson, (err) => {
          if (err) {
            this.err(err);
          } else {
            // TODO: Move on to the next one
            this.store();
          }
        });
      } catch (e) {
        this.err(e);
      }
    }
  }

  err(e: any) {
    this.pause();
    this.emit('error', e);
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
    this.store();
  }
}
