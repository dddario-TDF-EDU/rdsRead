import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


// Import AWS SDK v3
const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

// Set the AWS Region
const REGION = "us-east-1"; // replace with your desired region

// Create an Amazon DynamoDB service client object
const ddbClient = new DynamoDBClient({ region: REGION });

// Set the parameters
const params = {
  TableName: 'miTablaEjemplo',
  Key: {
    'Artista': { S: 'YourArtistValue' }, // replace with your artist value
    'Cancion': { S: 'YourSongValue' } // replace with your song value
  }
};

const run = async () => {
  try {
    const data = await ddbClient.send(new GetItemCommand(params));
    console.log("Success", data.Item);
  } catch (err) {
    console.log("Error", err);
  }
};





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
    run();
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
