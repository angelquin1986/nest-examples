import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './http/test.controller';
import { KafkaProducerService } from './kafka/kafkaProducer.service';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, KafkaProducerService],
})
export class AppModule {}
