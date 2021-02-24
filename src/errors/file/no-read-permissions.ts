import { CustomError } from '../custom-error';

export class NoReadPermissions extends CustomError {
  constructor() {
    super('Cannot read the chainfile, missing permissions');
  }
}
