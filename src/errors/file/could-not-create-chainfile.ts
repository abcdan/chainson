import { CustomError } from '../custom-error';

export class CouldNotCreateChainfile extends CustomError {
  constructor() {
    super("Couldn't create a chainfile");
  }
}
