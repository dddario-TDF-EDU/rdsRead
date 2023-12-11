import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
              private readonly userRepository: Repository<User>) {}
  
  async create(createUserDto: CreateUserDto) {
    const {username, email, password} = createUserDto;
    const newUser: User = new User (username, email, password);
    await this.userRepository.save(newUser);
    return newUser.username + "creado";
  }

  async findAll() {
    const allUsers = await this.userRepository.find();
    return allUsers;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
