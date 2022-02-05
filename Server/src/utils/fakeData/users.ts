import { Product } from 'src/products/entities/product.entity';
import { internet, commerce, lorem, image, name } from 'faker';
import { videoData } from './youtube-video';
import { uuid } from 'uuidv4';
import { User } from 'src/users/entities/user.entity';

const MakeImagesArray = (): string[] => {
  const max = 4;
  const min = 2;

  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  const picsArray = [];

  for (let i = 0; i < randomInt; i++) {
    picsArray.push(`https://picsum.photos/350/700?random=${i}`);
  }
  return picsArray;
};

export const createProducts = (user_id: number | string): Product[] => {
  //For I will use uuid for user_id
  const max = 20;
  const min = 2;

  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  const products = [];

  for (let i = 0; i < randomInt; i++) {
    const product = {
      product_id: uuid(),
      product_name: commerce.product(),
      images: MakeImagesArray(), // This is the array of random number of pics
      video: videoData[Math.floor(Math.random() * videoData.length)].link, // This should come from the video of the Youtube short
      user_id, // this is placeholder
      sold: Math.random() < 0.5,
      // I will update the product Info when needed .. it will probably soon enough I guess
    };
    products.push(product);
  }

  return products;
};

export const createUsers = (customerNumber: number = 1000): User[] => {
  const users = [];
  for (let i = 0; i < customerNumber; i++) {
    let firstname = name.firstName();
    let lastname = name.lastName();
    let user_id = uuid();
    const user = {
      user_id,
      user_name: firstname + '_' + lastname,
      password: 'Lazctlazct93!@',
      email: internet.email(firstname + lastname),
      confirm_email: true, // For convenience
      first_name: firstname,
      last_name: lastname,
      expiration_email_time: null,
    };
    users.push(user);
  }

  return users;
};
