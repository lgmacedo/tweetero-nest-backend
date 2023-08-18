import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestError extends HttpException {
  constructor(message: string = 'Bad Request') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
