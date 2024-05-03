import { DocumentBuilder } from '@nestjs/swagger';


export const options = new DocumentBuilder()
  .setTitle('Generate Key')
  .setDescription('Encrypt and Decrypt String')
  .setVersion('1.0')
  .addServer('http://localhost:3000/', 'Local environment')
  // .addServer('https://staging.yourapi.com/', 'Staging')
  // .addServer('https://production.yourapi.com/', 'Production')
  // .addTag('Your API Tag')
  .build();
