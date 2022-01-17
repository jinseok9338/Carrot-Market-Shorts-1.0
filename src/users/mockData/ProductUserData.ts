import { commerce, lorem, image } from 'faker';
import { CreateProductInput } from 'src/products/dto/create-product.input';
import { Product } from 'src/products/entities/product.entity';
import { ProductData } from '../type/DataType';
import { Mockdata } from './UsersMockData';

const max = 10;
const min = 0;
const RandomArray = Array.from(
  { length: Math.random() * (max - min) + min },
  (x, i) => i,
);

export const MockProductData: CreateProductInput[] = Mockdata.map(() => ({
  product_name: commerce.product(),
  product_id: lorem.word(),
  images: RandomArray.map(() => image.imageUrl()),
  video: image.imageUrl(),
  user_id: 123,
  sold: Math.random() < 0.5,
}));
