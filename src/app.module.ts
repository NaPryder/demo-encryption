import { Module } from '@nestjs/common';
import { EncryptionController } from './encryptions/encryptions.controller';
import { EncryptionService } from './encryptions/encryptions.service';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [ConfigModule.forRoot({
    cache: true
  })],
  controllers: [EncryptionController],
  providers: [EncryptionService],
})


export class AppModule { }
