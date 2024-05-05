import * as crypto from 'crypto';

const algorithm = 'aes-256-ctr';

function generateAESKey(): Buffer {
  // generate some string
  const randomString = crypto.randomBytes(64);

  // use SHA-256 to hash the random string and generate a 32-byte key
  const hash = crypto.createHash('sha256');
  hash.update(randomString);

  return hash.digest();
}

const aesKey = generateAESKey();
const aesEncode = 'base64';
const ivLength = crypto.randomBytes(16).toString(aesEncode).length;
const stringEncode = 'base64';
const stringDecode = 'utf8';

export function encryptWithAESKey(plaintext: string): string {
  // random IV
  const iv = crypto.randomBytes(16);

  // encryption
  const cipher = crypto.createCipheriv(algorithm, aesKey, iv);
  const encryptedText = Buffer.concat([
    cipher.update(plaintext),
    cipher.final(),
  ]);

  // concatenate iv and encrypted text
  return iv.toString(aesEncode) + encryptedText.toString(aesEncode);
}

export function decryptWithAESKey(encodedText: string): string {
  // params: encodedText is concatenate of iv and encrypted text.

  // extract IV from encodeText
  let extractedIv = encodedText.slice(0, ivLength);
  const encrptedText = encodedText.slice(ivLength, encodedText.length);
  const iv = Buffer.from(extractedIv, aesEncode);

  // decryption
  const decipher = crypto.createDecipheriv(algorithm, aesKey, iv);
  const decryptedText = Buffer.concat([
    decipher.update(encrptedText, aesEncode),
    decipher.final(),
  ]);

  return decryptedText.toString(stringDecode);
}

export function encryptWithPrivateKey(plaintext: string) {
  const encrypted = crypto.privateEncrypt(
    process.env.PRIVATE_KEY,
    Buffer.from(plaintext),
  );

  return encrypted.toString(stringEncode);
}

export function decryptWithPublicKey(ciphertext: string) {
  const decrypted = crypto.publicDecrypt(
    process.env.PUBLIC_KEY,
    Buffer.from(ciphertext, stringEncode),
  );

  return decrypted.toString(stringDecode);
}
