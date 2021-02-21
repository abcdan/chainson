const fs = require('fs')
import { NoFileError } from './errors/no-file-error';

class Chainson {
  private fileLocation: string
  private output: string
  
  constructor(fileLocation = 'chainson', output = 'NORMAL') {
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
    console.log(`${this.log.caller}: ${message}`)
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
      this.checkChainExists()
    } catch (ignored) {
      return
    }
    
    await fs.promises.writeFile(this.fileLocation)
  }
}

export = Chainson