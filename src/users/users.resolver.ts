import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { ReturnType, User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => ReturnType)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<ReturnType> {
    return this.usersService.createUser(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('email', { type: () => String }) email: string) {
    return this.usersService.findOne(email);
  }

  @Mutation(() => [User], { name: 'addMockData' })
  AddMockData(): Promise<User[] | Error> {
    return this.usersService.addMockUsers();
  }
}
