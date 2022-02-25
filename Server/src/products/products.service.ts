import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { getConnection, Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { UpdateProductInput } from './dto/update-product.input';
import { uuid } from 'uuidv4';
import { PaginationInput } from './dto/PaginationInput';
import { PaginationResult } from './paginationResultType';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private usersService: UsersService,
  ) {}

  async createProduct(
    createProductInput: CreateProductInput,
  ): Promise<Product> {
    let product = { ...createProductInput, product_id: uuid() };
    const newProduct = this.productRepository.create(product);

    return await this.productRepository.save(newProduct);
  }

  findOwnerOfProduct(user_id: string): Promise<User> {
    return this.usersService.findOne(user_id);
  }

  async findUserProducts(user_id: string): Promise<Product[]> {
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
    return this.productRepository.findOneOrFail(product_id);
  }

  async removeOne(product_id: string): Promise<string> {
    let product = await this.productRepository.findOne(product_id);
    if (!product) {
      return `The product ${product_id} doesn't exist`;
    }
    await this.productRepository.delete(product_id);
    return `successfully deleted product ${product_id} `;
  }

  async productUpdate(
    product: Product,
    productUpdateInfo: UpdateProductInput,
  ): Promise<string> {
    await getConnection()
      .createQueryBuilder()
      .update(Product)
      .set(productUpdateInfo)
      .where('product_id = :product_id', { product_id: product.product_id })
      .execute();

    return 'successfully Updated productInfo';
  }

  async paginateProduct({
    user_id,
    page,
    take,
  }: PaginationInput): Promise<string> {
    // Put Pagination Logic Here
    return 'successfully Updated productInfo';
  }
}
