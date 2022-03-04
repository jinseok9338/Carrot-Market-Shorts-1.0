import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentInput } from 'src/comments/dto/create-comment.input';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
import { createUsers } from 'src/utils/fakeData/users';
import { createProducts } from 'src/utils/fakeData/products';
import { createComments } from 'src/utils/fakeData/comments';
import { getRandomInt } from 'src/utils/getRandomNumber';
import { getRandomSample } from 'src/utils/getRandomSample';
import { Logger } from '@nestjs/common';
import { WatchTime } from 'src/watch-time/entities/watch-times.entity';
import { ProductWatchTime } from 'src/product-watch-time/entities/product-watch-time.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class TestDataService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    @InjectRepository(ProductWatchTime)
    private productWatchTimeRepository: Repository<ProductWatchTime>,
  ) {}

  async addTestUsers(customerNumber: number): Promise<User[]> {
    let users = await createUsers(customerNumber);
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(users)
      .execute();

    return this.usersRepository.find();
  }

  async AddTestDefaulProductWatchTime(
    products: Product[],
  ): Promise<ProductWatchTime[]> {
    const defaultProductWatchTimes = products.map((product) => ({
      product_id: product.product_id,
      product_watch_time_id: uuid(),
    }));

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(ProductWatchTime)
      .values(defaultProductWatchTimes)
      .execute();

    return await this.productWatchTimeRepository.find();
  }

  async addTestProducts(): Promise<Product[]> {
    const users = await getRepository(User)
      .createQueryBuilder('user')
      .getMany();

    let AllProducts = [] as Product[];

    users.forEach((user) => {
      let products = createProducts(user.user_id);
      AllProducts = AllProducts.concat(products);
    });

    if (AllProducts.length == 0) {
      throw new Error('No Products');
    }

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values(AllProducts)
      .execute();

    await this.AddTestDefaulProductWatchTime(AllProducts);

    return this.productsRepository.find();
  }

  async addTestComment(): Promise<Comment[]> {
    const products = await this.productsRepository.find();
    const users = (await this.usersRepository.find()).map(
      ({ display_pic, user_id, user_name }) => ({
        display_pic,
        user_id,
        user_name,
      }),
    );

    let AllComments = [];
    products.forEach((product) => {
      const RandomUsers = getRandomSample(users, getRandomInt(2, 8));
      let comments = createComments(RandomUsers, product);
      AllComments = AllComments.concat(comments);
    });

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Comment)
      .values(AllComments)
      .execute();
    return this.commentRepository.find();
  }
}
