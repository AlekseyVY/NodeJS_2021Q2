export class ExtendedError extends Error {
  statusCode: number;

  msg: string | ArrayBufferView;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.msg = message;
  }
}