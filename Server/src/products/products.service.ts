import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { getConnection, Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { UpdateProductInput } from './dto/update-product.input';

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

  findOne(product_id: number) {
    return this.productRepository.findOneOrFail(product_id);
  }

  async removeOne(product_id: number): Promise<string> {
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
}