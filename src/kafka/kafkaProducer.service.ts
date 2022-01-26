import { Injectable, Logger } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaProducerService {
  private readonly logger = new Logger();
  private kafka;
  private readonly host = `127.0.0.1:9092`;
  constructor() {
    this.kafka = new Kafka({
      clientId: 'vivo-kafka',
      brokers: [`${this.host}`],
    });
  }

  public async kafkaSendMessage(topic: string, message: any) {
    try {
      const producer = this.kafka.producer();
      await producer.connect();
      await producer.send({
        topic: topic,
        messages: [{ key: 'my-key', value: message }],
      });

      await producer.disconnect();
      this.logger.debug('Kafka send message');
      return true;
    } catch (error) {
      this.logger.error(error, 'kafkaSendMessage');
      return false;
    }
  }
}
