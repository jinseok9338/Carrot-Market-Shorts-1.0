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
    const userOfProd = this.usersService.findByUserId(
      createProductInput.userId,
    );
    const newProduct = this.productRepository.create(createProductInput);
    newProduct.user = await userOfProd;
    console.log(newProduct);
    return await this.productRepository.save(newProduct);
  }

  findOwnerOfProduct(userId: string): Promise<User> {
    return this.usersService.findByUserId(userId); // Find it by the userId
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(productId: string) {
    return this.productRepository.find({ productId });
  }
}
