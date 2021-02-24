export abstract class CustomError extends Error {
  constructor(message: string) {
    super(message);
  }
}
