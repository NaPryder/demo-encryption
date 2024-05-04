export interface EncryptedData {
  data1: string;
  data2: string;
}

export interface CommonResponse {
  successful: boolean,
  error_code: string,
  data: null | EncryptedData | EncryptionPayload
}


export interface EncryptionPayload {
  payload: string;
}