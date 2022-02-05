import { Product } from 'src/products/entities/product.entity';
import { userData } from 'src/users/type/DataType';
import { commerce, lorem, image } from 'faker';

const MakeImagesArray = (): string[] => {
  const max = 4;
  const min = 1;

  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  const picsArray = [];

  for (let i = 0; i < randomInt; i++) {
    picsArray.push(`https://picsum.photos/350/700?random=${i}`);
  }
  return picsArray;
};

const createProducts = (): Product[] => {
  const max = 20;
  const min = 1;

  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  const products = [];

  for (let i = 0; i < randomInt; i++) {
    const product = {
      product_name: commerce.product(),
      images: MakeImagesArray(), // This is the array of random number of pics
      video: 1, // This should come from the video of the Youtube short
      user_id: i + 1, // this is placeholder
      sold: Math.random() < 0.5,
      // I will update the product Info when needed .. it will probably soon enough I guess
    };
    products.push();
  }

  return products;
};

const createUsers = (): userData[] => {
  const customerNumber = 1000;
  const users = [];
  for (let i = 0; i < customerNumber; i++) {
    const user = {};
  }

  return users;
};
