import { CustomError } from '../custom-error';

export class NoChainLoaded extends CustomError {
  constructor() {
    super('No Chain appears to be loaded into memory');
  }
}
