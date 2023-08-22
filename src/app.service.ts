import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  getUsers() {
    return this.userRepository.find();
  }

  getOne(id: number) {
    return this.userRepository.findOneByOrFail({id});
  }

  createUser(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.userRepository.update({id: updateUserDto.id}, updateUserDto);
  }

  delete(id: number) {
    return this.userRepository.delete({id});
  }
}
