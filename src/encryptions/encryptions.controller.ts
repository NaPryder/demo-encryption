import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { EncryptionService } from './encryptions.service'
import { ApiTags } from '@nestjs/swagger';
import { EncryptionDto } from './dto/encryption.dto';
import { CommonValidationPipe } from 'src/utils/validations.util';
import { DecryptionDto } from './dto/decryption.dto';

@ApiTags('Encryption')
@Controller()
export class EncryptionController {
  constructor(private readonly appService: EncryptionService) { }


  @Post("get-encrypt-data")
  encryption(@Body(CommonValidationPipe) encryptionBody: EncryptionDto) {
    return this.appService.encryption(encryptionBody);
  }

  @Post("get-decrypt-data")
  decryption(@Body(CommonValidationPipe) decryptionBody: DecryptionDto) {
    return this.appService.decryption(decryptionBody);
  }
}