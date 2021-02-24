import { CustomError } from '../custom-error';

export class NoLinkFound extends CustomError {
  constructor(link: string) {
    super('Link `' + link + '` not found in Chain');
  }
}
