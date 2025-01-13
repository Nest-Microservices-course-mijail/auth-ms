import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
// import { NATS_SERVICE } from '../config/services';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('OrdersService');

  constructor() {
    // super();
  }
}
