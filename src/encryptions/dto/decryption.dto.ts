import { IsNotEmpty, IsString } from "class-validator";
import { EncryptedData } from "../interfaces/encryption.interface";
import { ApiProperty } from '@nestjs/swagger';


export class DecryptionDto implements EncryptedData {
  @ApiProperty({
    example: "Text data 1",
    required: true
  })
  @IsString()
  @IsNotEmpty()
  data1: string;


  @ApiProperty({
    example: "Text data 2",
    required: true
  })
  @IsString()
  @IsNotEmpty()
  data2: string;
}