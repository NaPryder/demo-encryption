import { HttpException, ValidationPipe } from "@nestjs/common";


export const CommonValidationPipe = new ValidationPipe({
  exceptionFactory: (errors) => new HttpException({
    successful: false,
    error_code: errors,
    data: null,
  }, 400)
})