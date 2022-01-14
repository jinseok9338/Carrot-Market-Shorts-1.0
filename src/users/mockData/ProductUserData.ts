import { commerce, lorem, image } from 'faker';
import { ProductData } from '../type/DataType';
import { Mockdata } from './UsersMockData';

const max = 10;
const min = 0;
const RandomArray = Array.from(
  { length: Math.random() * (max - min) + min },
  (x, i) => i,
);

export const MockProductData: ProductData[] = Mockdata.map(() => ({
  productName: commerce.product(),
  productId: lorem.word(),
  images: RandomArray.map(() => image.imageUrl()),
  video: image.imageUrl(),
  userId: '',
  sold: Math.random() < 0.5,
}));
