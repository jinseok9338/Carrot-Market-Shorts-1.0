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
    try {
      let users = await createUsers(customerNumber);
      let user_ids_with_names = users.map((user) => ({
        user_id: user.user_id,
        user_name: user.user_name,
        display_pic: user.display_pic,
      }));

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(users)
        .execute();

      let AllProducts = [] as Product[];

      users.forEach(async (user) => {
        let products = createProducts(user.user_id);
        AllProducts.concat(products);
        await getConnection()
          .createQueryBuilder()
          .insert()
          .into(Product)
          .values(products)
          .execute();
      });

      AllProducts.forEach(async (product) => {
        let sampled_user_ids = getRandomSample(
          user_ids_with_names,
          getRandomInt(2, 5),
        );

        let comments = createComments(sampled_user_ids, product);

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
