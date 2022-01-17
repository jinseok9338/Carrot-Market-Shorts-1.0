import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private usersService: UsersService,
  ) {}

  async createProduct(
    createProductInput: CreateProductInput,
  ): Promise<Product> {
    const newProduct = this.productRepository.create(createProductInput);

    return await this.productRepository.save(newProduct);
  }

  findOwnerOfProduct(user_id: number): Promise<User> {
    return this.usersService.findOne(user_id); // Find it by the userId
  }

  async findUserProducts(user_id: number): Promise<Product[]> {
    // FInd the user based on the prodId... Shit.. This is ,uch harder thatn I anticipated
    let res = await this.productRepository
      .createQueryBuilder()
      .where('user_id IN (:user_id)', { user_id })
      .getMany();
    console.log(res);
    return res;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(product_id: string) {
    return this.productRepository.find({ product_id });
  }
}
