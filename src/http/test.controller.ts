import { Controller, Get, Logger, Req, Res } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { KafkaProducerService } from '../kafka/kafkaProducer.service';

@Controller('/test')
export class TestController {
  private readonly logger = new Logger();

  constructor(private kafkaProducerService: KafkaProducerService) {}

  @ApiExcludeEndpoint()
  @Get('/kafka')
  @ApiTags('testKafka')
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 400, description: 'Invalid request' })
  @ApiResponse({ status: 401, description: 'unauthorized' })
  @ApiResponse({ status: 404, description: 'Not found' })
  /* istanbul ignore next */
  async testGet(@Req() req: Request, @Res() res: Response) {
    try {
      const jsonMessage = `{
  "event": "taken_visible_order",
  "time": "2021-11-09 16:46:08",
  "origin": "ms_core_kafka",
  "detail": {
    "id": 958198747,
    "state": "created",
    "tip": 0,
    "eta": 30,
    "delay": 15,
    "user": {
      "id": 509,
      "email": "soporte@rappi.com",
      "activated_at": "2021-11-09 16:46:08",
      "first_name": "Soporte"
    },
    "products": [
      {
        "id": 428932,
        "name": "Arroz Familiar",
        "image": "2135496249-1611337114995.png",
        "description": "Arroz por 3 porciones.",
        "type": "Arroz",
        "quantity": 0,
        "pivot": {
          "id": 9403336,
          "units": 1,
          "product_id": 2135497144,
          "store_id": 987654,
          "unit_price": 23421,
          "total_price": 23421,
          "sale_type": "U",
          "percentage_price_variation": 0,
          "has_price_cut": false,
          "discount_percentage_by_rappi": 100,
          "price": 23421
        },
        "order_id": 958198747,
        "retail_id": "428932",
        "step_quantity_in_grams": 0,
        "min_quantity_in_grams": 0,
        "max_quantity_in_grams": 0,
        "requires_medical_prescription": false
      },
      {
        "id": 428936,
        "name": "Porción de Arroz Amarillo",
        "image": "2135496332-1611349849306.jpg",
        "description": "Arroz amarillo.",
        "type": "Acompañamientos",
        "quantity": 0,
        "pivot": {
          "id": 9403337,
          "units": 1,
          "product_id": 2135497146,
          "store_id": 987654,
          "unit_price": 40000,
          "total_price": 40000,
          "sale_type": "U",
          "percentage_price_variation": 0,
          "has_price_cut": false,
          "discount_percentage_by_rappi": 100,
          "price": 40000
        },
        "order_id": 958198747,
        "retail_id": "428936",
        "step_quantity_in_grams": 0,
        "min_quantity_in_grams": 0,
        "max_quantity_in_grams": 0,
        "requires_medical_prescription": false
      }
    ],
    "charges": [
      {
        "id": 10764597,
        "value": 5000,
        "order_id": 958198747,
        "charge_type": "service_fee"
      },
      {
        "id": 10764598,
        "value": 3500,
        "order_id": 958198747,
        "charge_type": "shipping"
      }
    ],
    "discount": {
      "id": 2671262,
      "order_id": 958198747,
      "total_order_discount": 12700,
      "total_charge_discount": 3500,
      "discount_details": [
        {
          "id": 4765548,
          "value": 12700,
          "type": "7",
          "offertable_id": 198978,
          "type_description": "percentage",
          "offertable_type": "Orders\\\\GlobalOffers\\\\GlobalOffer",
          "in_store": false
        },
        {
          "id": 4765549,
          "value": 3500,
          "type": "5",
          "offertable_id": 191000029800,
          "type_description": "prime_discount_shipping",
          "offertable_type": "PrimeDetail"
        }
      ]
    },
    "application_user_id": 191000029800,
    "payment_method": "cc",
    "total_value": 55721,
    "order_eta": 30,
    "order_init_eta": 30,
    "address_id": 112070059,
    "assignment_time": 240,
    "taked_at": "2021-11-09 16:46:08",
    "time_in_store": 0,
    "travel_time": 0,
    "purchase_type": "now",
    "expediter_id": 509,
    "delay_button_visible_time": 10,
    "cooking_time": 25,
    "order_released": false,
    "cooking_time_started_at": "2021-11-09 16:46:08",
    "cooking_time_finished_at": "2021-11-09 17:11:08",
    "created_at": "2021-11-09 16:44:06",
    "updated_at": "2021-11-09 16:44:45",
    "delivery_method": "marketplace",
    "level_earning": 0,
    "application_user": {
      "id": 191000029800,
      "first_name": "Juliana ",
      "last_name": "Uribe",
      "email": "juliana.uribe@rappi.com",
      "phone": "3124700375",
      "vip": false,
      "hvu": {
        "hvu_prob": 0,
        "completed_orders": 0
      }
    },
    "user_address": {
      "id": 112070059,
      "address": "Calle 93 # 19 - 58",
      "active": true,
      "lat": 4.6788055,
      "lng": -74.0554172,
      "tag": "Otro",
      "zip_code": "110221"
    },
    "shopping_cart_order": {
      "identifier": "1636494208124_191000029800"
    },
    "calculated_information": {
      "delayed": false,
      "shipping": 3500,
      "store_type": "bigdarkstores_nc",
      "is_active": true,
      "storekeeper_type": "partner",
      "fraud_state": "accepted",
      "is_free": false,
      "can_be_canceled": true,
      "init_store_type": "restaurant",
      "promised_shipping_price": 0,
      "store_type_store": "restaurant",
      "reference_point_lat": 4.6769889,
      "reference_point_lng": -74.0525168,
      "reference_point_class": "Orders\\\\OrderStore",
      "reference_point_address": "Calle 93 #15 51, Bogotá, Colombia",
      "visible_at": "2021-11-09 16:44:22",
      "hide_by_shopper_inactivity": false,
      "store_id": 987654,
      "need_be_analyzed": false,
      "city_address_id": 1,
      "partner_order_state": "cooking",
      "is_placed_now": true
    },
    "order_partner": {
      "id": 145656,
      "order_id": 958198747,
      "partner_id": 1001420,
      "type": "restaurant"
    },
    "has_promise": false,
    "eta_value": 30,
    "polygon_size": 2,
    "order_modifications": [
      {
        "id": 36779598,
        "type": "hold_partner_assign",
        "order_id": 0,
        "created_at": "2021-11-09 16:44:22"
      },
      {
        "id": 36779599,
        "type": "assign_to_partner_v2",
        "order_id": 0,
        "created_at": "2021-11-09 16:44:45"
      },
      {
        "id": 36779597,
        "type": "created_queue",
        "order_id": 0,
        "created_at": "2021-11-09 16:44:08"
      },
      {
        "id": 36779605,
        "type": "taken_visible_order",
        "order_id": 0,
        "created_at": "2021-11-09 16:46:08"
      }
    ],
    "stores": [
      {
        "name": "NO TOCAR Soporte QA pruebas Marketplace ",
        "image": "restaurant-1561046508.png",
        "address": "Calle 93 #15 51, Bogotá, Colombia",
        "phone": "222222222",
        "lat": 4.6769889,
        "lng": -74.0525168,
        "type": "restaurant",
        "enabled": true,
        "logo": "1f370-1632146452221.png",
        "store_id": 987654,
        "marketplace": true,
        "require_plu": false,
        "image_plu": "https://images.dev.rappi.com/image_plu/1f34d-1632146454448.png",
        "shopping_center": false,
        "vertical_sub_group": "Restaurantes",
        "call_center": false
      }
    ],
    "product_returns": {
      "id": 275324,
      "order_id": 958198747,
      "can_be_returned": false
    },
    "accept_language": "es-AR"
  },
  "order_id": 958198747
}`;
      this.logger.debug('health endpoint');
      await this.kafkaProducerService.kafkaSendMessage(
        'order-detail-core',
        jsonMessage,
      );
      res.status(200).send({ message: 'ok', version: 13 });
    } catch (ex) {
      this.logger.error(ex);
      res.status(400).send(ex);
      return;
    }
  }
}
