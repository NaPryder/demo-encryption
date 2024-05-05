import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { EncryptionService } from './encryptions.service';
import { ApiTags } from '@nestjs/swagger';
import { EncryptionDto } from './dto/encryption.dto';
import { DecryptionDto } from './dto/decryption.dto';
import {
  ErrorsInterceptor,
  TransformationInterceptor,
} from './encryptions.interceptor';

@ApiTags('Encryption')
@UseInterceptors(new TransformationInterceptor())
@UseInterceptors(new ErrorsInterceptor())
@Controller()
export class EncryptionController {
  constructor(private readonly appService: EncryptionService) {}

  @Post('get-encrypt-data')
  encryption(@Body(ValidationPipe) body: EncryptionDto) {
    return this.appService.encryption(body);
  }

  @Post('get-decrypt-data')
  decryption(@Body(ValidationPipe) body: DecryptionDto) {
    return this.appService.decryption(body);
  }
}
