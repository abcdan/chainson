import { NoLinkFound } from './errors/chain/no-link';
import { NoChainLoaded } from './errors/chainfile/no-chain-loaded';
import { Chainfile } from './models/chainfile';
import { ChainQueue } from './modules/queue';
import { loadFromDisk } from './modules/storage';
import { runValidateChecks } from './modules/validate-file';

class Chainson {
  private chainLocation: string;
  private output: string;
  private chainQueue: ChainQueue;
  private chain: Chainfile | undefined;

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
    runValidateChecks(this.chainLocation);
    this.chain = loadFromDisk(this.chainLocation);
  }
  
  /**
   * Add a link to the chain
   * @param key key
   * @param value data
   */
  public add(key: any, value: any) {
    if (!this.chain) throw new NoChainLoaded();
    this.chain.chain.set(key, value);
    this.store();
  }

  /**
   * Get the value from the chain
   * @param key key
   */
  public get(key: string): any {
    if (!this.chain) throw new NoChainLoaded();
    if(!this.contains(key)) throw new NoLinkFound(key)
    return this.chain.chain.get(key)
  }

  /**
   * Check if the chain contains a certain key
   * @param key key
   */
  public contains(key: string): boolean {
    if(!this.chain) throw new NoChainLoaded()
    return this.chain.chain.has(key)
  }

  /**
   * Returns the full chain as a map
   */
  public full(): Map<string, Object> {
    if (!this.chain) throw new NoChainLoaded();
    return this.chain.chain
    
  }

  /**
   * Add the updated chain to the queue to be made persistan
   */
  private store() {
    if (!this.chain) throw new NoChainLoaded();
    this.chainQueue.add(this.chain);
  }
  
}

export = Chainson;
