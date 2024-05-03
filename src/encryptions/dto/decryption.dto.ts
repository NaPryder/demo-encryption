import { IsNotEmpty, IsString } from "class-validator";
import { EncryptedDataResponse } from "../interfaces/encryption.interface";
import { ApiProperty } from '@nestjs/swagger';


export class DecryptionDto implements EncryptedDataResponse {
  @ApiProperty({
    example: 'required fields: data1, data2',
    required: true
  })

  @IsString()
  @IsNotEmpty()
  data1: string;

  @IsString()
  @IsNotEmpty()
  data2: string;
}