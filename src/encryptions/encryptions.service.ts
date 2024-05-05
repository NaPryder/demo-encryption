import { Injectable } from '@nestjs/common';
import {
  EncryptedData,
  EncryptionPayload,
} from './interfaces/encryption.interface';
import {
  decryptWithAESKey,
  decryptWithPublicKey,
  encryptWithAESKey,
  encryptWithPrivateKey,
} from './encryptions.utils';

@Injectable()
export class EncryptionService {
  encryption(body: EncryptionPayload): EncryptedData {
    const { payload } = body;

    try {
      const data1 = encryptWithPrivateKey(payload);
      const data2 = encryptWithAESKey(payload);

      return { data1, data2 };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  decryption(body: EncryptedData): EncryptionPayload {
    const { data1, data2 } = body;

    try {
      const publicKeyDecrypted = decryptWithPublicKey(data1);
      const AESDecrypted = decryptWithAESKey(data2);

      return {
        payload: AESDecrypted || publicKeyDecrypted,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
