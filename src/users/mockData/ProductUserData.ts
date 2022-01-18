import { commerce, lorem, image } from 'faker';
import { CreateProductInput } from 'src/products/dto/create-product.input';
import { Mockdata } from './UsersMockData';

const max = 10;
const min = 0;
const RandomArray = Array.from(
  { length: Math.random() * (max - min) + min },
  (x, i) => i,
).map(() => image.imageUrl() + Math.random());

export const MockProductData: CreateProductInput[] = Mockdata.map((user,i) => ({
  product_name: commerce.product(),
  product_id: lorem.word() + Math.random(),
  images: RandomArray,
  video: image.imageUrl(),
  user_id: i + 1, // this is placeholder
  sold: Math.random() < 0.5,
}));
