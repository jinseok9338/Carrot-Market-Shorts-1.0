import faker from 'faker';
import { userData } from './userDataType';
import { Mockdata } from '../users/mockData/Users';

export const makeUserData = () => {
  const usersData: userData[] = Mockdata.map((user) => {
    return {
      ...user,
      products: [
        {
          userId: user.userId,
          productId: faker.lorem.word as unknown as string,
          productName: faker.commerce.product as unknown as string,
          sold: Math.random() < 0.5,
          images: [faker.image.imageUrl as unknown as string],
          //TODO need to make video url ... but I have none. Make video scraper
          video: faker.image.imageUrl as unknown as string, // I need to make it as a video url later
        },
      ],
    };
  });

  return usersData;
};
