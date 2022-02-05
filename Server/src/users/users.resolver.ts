import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
  Int,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { ReturnType, User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { UpdateUserInput } from './dto/update-user.input';

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
  findOne(@Args('user_id', { type: () => String }) user_id: string) {
    return this.usersService.findOne(user_id);
  }

  @ResolveField(() => [Product])
  async products(@Parent() product: Product): Promise<Product[]> {
    return await this.productsService.findUserProducts(product.user_id);
  }

  @Mutation(() => [User], { name: 'addMockData' })
  async AddMockData(
    @Args('customer_number', { type: () => Int })
    customer_number: number = 1000,
  ): Promise<User[] | Error> {
    return await this.usersService.addMockUsers(customer_number);
  }

  @Mutation(() => String)
  async updateUserInfo(
    @Args('updateUserInfo') updateUserInput: UpdateUserInput,
  ): Promise<string> {
    const { user_id, ...restInput } = updateUserInput;
    const user = await this.usersService.findOne(user_id);
    const res = await this.usersService.updateUserInfo(user, restInput);
    return 'Successfully Updated';
  }

  @Mutation(() => String, { name: 'deleteUser' })
  async deleteUser(
    @Args('user_id', { type: () => String }) user_id: string,
  ): Promise<String> {
    return await this.usersService.deleteOne(user_id);
  }
}
