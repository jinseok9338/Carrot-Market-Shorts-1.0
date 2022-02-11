import { Comment } from 'src/comment/entities/comment.entity';
import { uuid } from 'uuidv4';
import { lorem } from 'faker';

export const createComments = (
  user_ids: string[],
  product_id: string,
): Comment[] => {
  let comments = [];
  for (let i = 0; i < user_ids.length; i++) {
    let comment: Comment = {
      comment_id: uuid(),
      created_at: new Date(),
      message: lorem.sentence(),
      product_id: product_id,
      updated_at: new Date(),
      user_id: user_ids[i], // There is no user name...
    };
    comments.push(comment);
  }

  return comments;
};
