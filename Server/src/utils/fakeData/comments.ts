import { Comment } from 'src/comments/entities/comment.entity';
import { uuid } from 'uuidv4';
import { lorem } from 'faker';
import { Product } from 'src/products/entities/product.entity';

interface UserType {
  user_id: string;
  user_name: string;
  display_pic: string;
}

export const createComments = (
  users: UserType[],
  product: Product,
): Comment[] => {
  let comments = [];
  for (let i = 0; i < users.length; i++) {
    let comment = {
      comment_id: uuid(),
      created_at: new Date(),
      message: lorem.sentence(),
      product_id: product.product_id,
      updated_at: new Date(),
      user_id: users[i].user_id, // There is no user name...
      user_name: users[i].user_name,
      display_pic: users[i].display_pic,
      product,
      //Need to display the Product ... I am so confused...
    };
    comments.push(comment);
  }

  return comments;
};
