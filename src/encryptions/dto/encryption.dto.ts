import { IsNotEmpty, IsString, Length } from "class-validator";
import { EncryptionPayload } from "../interfaces/encryption.interface";
import { ApiProperty } from '@nestjs/swagger';


export class EncryptionDto implements EncryptionPayload {
  @ApiProperty({
    example: 'some text.',
    required: true
  })
  @Length(0, 20)
  @IsString()
  @IsNotEmpty()
  payload: string;
  // valdiate
}