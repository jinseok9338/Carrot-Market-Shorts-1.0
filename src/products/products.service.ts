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

  findOwnerOfProduct(user_id: string): Promise<User> {
    return this.usersService.findOne(user_id); // Find it by the userId
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(product_id: string) {
    return this.productRepository.find({ product_id });
  }
}
