import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { options } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger ui
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);


  await app.listen(3000);
}
bootstrap();
