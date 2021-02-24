import { CustomError } from '../custom-error';

export class NoWritePermissions extends CustomError {
  constructor() {
    super('Cannot write to the chainfile, missing permissions');
  }
}
