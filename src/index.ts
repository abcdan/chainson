const fs = require('fs')
import { global } from './configs/global';
import { NoFileError } from './errors/no-file-error';
import { createChainfile } from './modules/default-chain';

class Chainson {
  private fileLocation: string
  private output: string
  
  constructor(fileLocation = 'chainfile', output = 'NORMAL') {
    this.fileLocation = fileLocation + '.json'
    this.output = output
    this.init()
  }

  /**
   * Initializes the database, runs checks and sets everything up.
   */
  private init(): void {
    this.createFile()
  }

  /**
   * 
   * @param message the message that needs to be logged
   * @param level verbose/normal/crucial
   */
  private log(message: string, level = 'VERBOSE') {
    // TODO: Implement a way to only show errors based on the level
    // TODO: refactor log('...', 'VERBOSE) to verboseLog
    console.log(`${message}`)
  }

  private async checkChainExists() {
    try {
      this.log('Checking if file exists', 'VERBOSE')
      await fs.access(this.fileLocation, fs.constants.R_OK)
    } catch(ignored) {
      this.log('Couldn\'t access file', 'VERBOSE')
      throw new NoFileError()
    } finally {
      this.log('Done checking if file exists', 'VERBOSE')
    }
  }

  private async createFile() {
    try {
      await this.checkChainExists()
    } catch (ignored) {
      await fs.promises.writeFile(this.fileLocation, createChainfile(global.version))
    }
    
  }
}

export = Chainson