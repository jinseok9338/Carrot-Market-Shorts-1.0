import faker from 'faker';
import { ProductData, userData } from './userDataType';
import { Mockdata } from '../mockData/UsersMockData';
import { DeepPartial } from 'typeorm';

const makeRandomProducts = (): ProductData[] => {
  const max = 10;
  const min = 0;
  const imageMax = 5;
  const imageMin = 1;
  const randomArray = [
    ...Array(Math.floor(Math.random() * (max - min + 1)) + min).keys(),
  ]; // use it for map()

  const products = randomArray.map(() => ({
    images: [
      ...Array(
        Math.floor(Math.random() * (imageMax - imageMin + 1)) + imageMin,
      ).keys(),
    ].map(() => ''),
    productId: '',
    productName: '',
    sold: Math.random() < 0.5,
    userId: '',
    video: '',
  }));
  return products;
};

export const makeUserData = (): userData[] => {
  let products = makeRandomProducts();
  const UsersData = Mockdata.map((user) => ({
    ...user,
    products: products,
  }));

  return UsersData;
};
