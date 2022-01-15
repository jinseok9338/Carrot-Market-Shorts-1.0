import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
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
    console.log(newProduct);
    return await this.productRepository.save(newProduct);
  }

  findOwnerOfProduct(userId: string): Promise<User> {
    return this.usersService.findByUserId(userId); // Find it by the userId
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
