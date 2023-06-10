import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(RootModule);
  await app.listen(3000);
}
bootstrap();
