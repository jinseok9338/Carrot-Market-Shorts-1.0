import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentInput } from 'src/comment/dto/create-comment.input';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { getConnection, Repository } from 'typeorm';
import { createUsers } from 'src/utils/fakeData/users';
import { createProducts } from 'src/utils/fakeData/products';
import { createComments } from 'src/utils/fakeData/comments';
import { getRandomInt } from 'src/utils/getRandomNumber';
import { getRandomSample } from 'src/utils/getRandomSample';

@Injectable()
export class TestDataService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async addTestData(customerNumber: number): Promise<User[]> {
    let users = await createUsers(customerNumber);
    let user_ids = users.map((user) => user.user_id);
    try {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(users) // The password is not hashed ...
        .execute();

      users.forEach(async (user) => {
        let products = createProducts(user.user_id);
        await getConnection()
          .createQueryBuilder()
          .insert()
          .into(Product)
          .values(products)
          .execute();
      });

      const products = await this.productsRepository.find();

      products.forEach(async (product) => {
        let sampleed_user_ids = getRandomSample(user_ids, getRandomInt(2, 5));
        let comments = createComments(sampleed_user_ids, product.product_id);
        await getConnection()
          .createQueryBuilder()
          .insert()
          .into(Comment)
          .values(comments)
          .execute();
      });

      return this.usersRepository.find();
    } catch (e) {
      console.log(e);
    }
  }
}
