import { CustomError } from '../custom-error';

export class LinkAlreadyExists extends CustomError {
  constructor(link: string) {
    super('Link `' + link + '` already exists in Chain');
  }
}
