import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private service: AppService) {}

  @MessagePattern({ cmd: 'get_users' })
  getUsers() {
    return this.service.getUsers();
  }

  @MessagePattern({ cmd: 'get_user' })
  getUser(id: string) {
    return this.service.getOne(+id);
  }

  @MessagePattern({ cmd: 'create_user' })
  createUser(createUserDto: CreateUserDto) {
    return this.service.createUser(createUserDto);
  }

  @MessagePattern({ cmd: 'update_user' })
  updateUser(updateUserDto: UpdateUserDto) {
    return this.service.updateUser(updateUserDto);
  }

  @MessagePattern({ cmd: 'delete_user' })
  deleteUser(id: number) {
    return this.service.delete(id);
  }
}
