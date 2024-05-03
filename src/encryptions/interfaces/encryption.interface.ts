export interface EncryptedDataResponse {
  data1: string;
  data2: string;
}

export interface EncryptionBody {
  successful: boolean,
  error_code: string,
  data: null | EncryptedDataResponse | EncryptionPayload
}


export interface EncryptionPayload {
  payload: string;
}