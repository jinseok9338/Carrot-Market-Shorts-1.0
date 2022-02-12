import { Comment } from 'src/comment/entities/comment.entity';
import { uuid } from 'uuidv4';
import { lorem } from 'faker';

export const createComments = (
  users: {
    user_id: string;
    user_name: string;
    display_pic: string;
  }[],
  product_id: string,
): Comment[] => {
  let comments = [];
  for (let i = 0; i < users.length; i++) {
    let comment = {
      comment_id: uuid(),
      created_at: new Date(),
      message: lorem.sentence(),
      product_id: product_id,
      updated_at: new Date(),
      user_id: users[i].user_id, // There is no user name...
      user_name: users[i].user_name,
      display_pic: users[i].display_pic,
    };
    comments.push(comment);
  }

  return comments;
};
