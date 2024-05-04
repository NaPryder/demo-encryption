import { Injectable } from '@nestjs/common';
import { EncryptedData, CommonResponse, EncryptionPayload } from './interfaces/encryption.interface'

@Injectable()
export class EncryptionService {
  encryption(body: EncryptionPayload): EncryptedData {
    const { payload } = body
    // validate 
    console.log('payload :>> ', payload);

    try {

      return {
        data1: "123",
        data2: "sadf"
      }

    } catch (error) {
      throw error

    }

  }


  decryption(body: EncryptedData): EncryptionPayload {
    const { data1, data2 } = body
    // validate 
    console.log('data1 :>> ', data1);
    console.log('data2 :>> ', data2);

    try {

      return {
        payload: "234234"
      }

    } catch (error) {
      throw error

    }

  }
}