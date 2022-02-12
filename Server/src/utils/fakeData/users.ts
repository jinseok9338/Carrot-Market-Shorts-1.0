import { internet, name, image } from 'faker';

import { uuid } from 'uuidv4';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

export const createUsers = async (
  customerNumber: number = 1000,
): Promise<User[]> => {
  const users = [];
  for (let i = 0; i < customerNumber; i++) {
    let firstname = name.firstName();
    let lastname = name.lastName();
    let user_id = uuid();
    let password = await bcrypt.hash('Lazctlazct93!@', 10);
    const user = {
      user_id,
      user_name: firstname + '_' + lastname + i, // For Avoiding duplication
      password: password,
      email: internet.email(firstname + lastname + i), // For Avoiding duplication
      confirm_email: true, // For convenience
      first_name: firstname,
      last_name: lastname,
      expiration_email_time: null,
      interested: [],
      display_pic: image.people(30, 30),
    };
    users.push(user);
  }

  return users;
};
