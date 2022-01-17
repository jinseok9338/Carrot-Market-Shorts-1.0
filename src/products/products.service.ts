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
    return this.usersService.findOne(user_id);
  }

  async findUserProducts(user_id: number): Promise<Product[]> {
    let res = await this.productRepository
      .createQueryBuilder()
      .where('user_id IN (:user_id)', { user_id })
      .getMany();
    return res;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(product_id: string) {
    return this.productRepository.find({ product_id });
  }
}
