import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { ReturnType, User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private productsService: ProductsService,
  ) {}

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
  findOne(@Args('user_id', { type: () => String }) user_id: number) {
    return this.usersService.findOne(user_id);
  }

  @ResolveField((returns) => [Product])
  async products(@Parent() product: Product): Promise<Product[]> {
    return await this.productsService.findUserProducts(product.user_id);
  }

  @Mutation(() => [User], { name: 'addMockData' })
  async AddMockData(): Promise<User[] | Error> {
    return await this.usersService.addMockUsers();
  }
}
