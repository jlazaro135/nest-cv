import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://profilegpt.netlify.app', 'http://localhost:4200'], // Permite este origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Si necesitas soportar cookies
  });

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
