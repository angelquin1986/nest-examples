import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'aq-soft',
            brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
          },
          consumer: {
            groupId: 'aq-consumer',
          },
        },
      },
    ]),
  ],
})
export class KakfaModule {}
