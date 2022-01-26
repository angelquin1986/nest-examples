import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { KakfaModule } from './kafka/kakfa.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3006);

  const appKafka = await NestFactory.createMicroservice<MicroserviceOptions>(
    KakfaModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'order-detail-core',
          heartbeatInterval: 500,
        },
    }
    },
  );
  appKafka.listen();
}
bootstrap();
