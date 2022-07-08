import { Injectable } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';
import { User } from '../graphql';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: '1',
      firstName: 'eduardo',
      lastName: 'ricardo',
      questions: [],
    },
  ];

  @Query()
  async findOneById(@Args('id') id: number) {
    return this.users;
  }
}
