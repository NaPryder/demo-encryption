import { Injectable } from '@nestjs/common';
import { EncryptedDataResponse, EncryptionBody, EncryptionPayload } from './interfaces/encryption.interface'

@Injectable()
export class EncryptionService {
  encryption(body: EncryptionPayload): EncryptionBody {
    const { payload } = body
    // validate 
    console.log('payload :>> ', payload);
    let successful: boolean
    let error_code: string = ""
    let data: null | EncryptedDataResponse = null
    try {

      data = {
        data1: "123",
        data2: "sadf"
      }
      successful = true

    } catch (error) {
      throw error

    } finally {
      return {
        successful,
        error_code,
        data,
      }
    }

  }


  decryption(body: EncryptedDataResponse): EncryptionBody {
    const { data1, data2 } = body
    // validate 
    console.log('data1 :>> ', data1);
    console.log('data2 :>> ', data2);
    let successful: boolean
    let error_code: string = ""
    let data: null | EncryptedDataResponse = null
    try {

      data = {
        data1: "123",
        data2: "sadf"
      }
      successful = true

    } catch (error) {
      throw error

    } finally {
      return {
        successful,
        error_code,
        data,
      }
    }

  }
}