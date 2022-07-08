import { Args, Query, Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { QuestionsService } from '../questions/questions.service';

@Resolver('User')
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private questionsService: QuestionsService,
  ) {}

  @Query()
  async user(@Args('id') id: number) {
    return this.usersService.findOneById(id);
  }

  @ResolveField()
  async questions(@Parent() user) {
    const { id: userId } = user;
    return this.questionsService.findAll({ userId });
  }
}
