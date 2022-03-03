import { internet, commerce, lorem, image, name } from 'faker';
import { videoData } from './youtube-video';
import { uuid } from 'uuidv4';
import { Product } from 'src/products/entities/product.entity';

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
    const product_id = uuid();
    const product = {
      product_id,
      product_name: commerce.product(),
      images: MakeImagesArray(), // This is the array of random number of pics
      video: videoData[Math.floor(Math.random() * videoData.length)].link, // This should come from the video of the Youtube short
      user_id,
      sold: Math.random() < 0.5,
      tag: [commerce.product(), commerce.product(), commerce.product()],
      product_watch_time: {
        product_id,
        user_watch_times: [],
        product_watch_time_id: uuid(),
      },
      // I will update the product Info when needed .. it will probably soon enough I guess
    };
    products.push(product);
  }

  return products;
};
