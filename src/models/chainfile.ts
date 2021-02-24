export interface Chainfile {
  // What version of chainson the chain uses (for possible future compatability issues)
  version: string;
  // The chain itself, containing all data
  chain: Map<string, Object>;
  // The timestamp the chain got created
  createdAt?: Date;
  //  The timestamp the chain was last updated
  updatedAt: Date;
  // The transactions that happened within the chain for undoing
  history?: string[];
}
