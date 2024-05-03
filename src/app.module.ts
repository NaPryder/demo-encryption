import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncryptionController } from './encryptions/encryptions.controller';
import { EncryptionService } from './encryptions/encryptions.service';

@Module({
  imports: [],
  controllers: [EncryptionController],
  providers: [EncryptionService],
})


export class AppModule { }
