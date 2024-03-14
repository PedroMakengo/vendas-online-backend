import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];

  async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
    const { password } = createUserDTO;

    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltOrRounds);

    const user = {
      ...createUserDTO,
      password: passwordHash,
      id: this.users.length + 1,
    };

    this.users.push(user);

    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.users;
  }
}
