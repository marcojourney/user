import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor() {}

  @MessagePattern({ cmd: 'get_users' })
  getUsers() {
    return 'get all users';
  }
}
