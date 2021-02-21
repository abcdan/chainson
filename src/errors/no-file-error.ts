import { CustomError } from "./custom-error";

export class NoFileError extends CustomError {
    constructor() {
        super('File doesn\'t exist');
    }
}