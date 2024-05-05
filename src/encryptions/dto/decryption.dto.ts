import { IsNotEmpty, IsString } from 'class-validator';
import { EncryptedData } from '../interfaces/encryption.interface';
import { ApiProperty } from '@nestjs/swagger';

export class DecryptionDto implements EncryptedData {
  @ApiProperty({
    example:
      'V0ZTw0UeRC3Ry4c0SYwiMoFFsxV6llceI/Oxbglth1fyTUf8cEKDmTDZpoA1viDxOeiTNdpzNPEZqqdtHmw88/byRt+5O+SV43jNOK+pffeWmQs6iS2bWgIzODFNbPjrGAjIT5OB8G/QxvVfTFxJsoJwPT4gPuKlB6SZaawjbaA=',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  data1: string;

  @ApiProperty({
    example:
      '8YdO40QKh/EqNVTjlKnpcg==LrhIfBVnsHLSQjYaRPl5GdvEfAeWO0XIYb18BdqzTxWE',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  data2: string;
}
