import { getRandomInt } from './getRandomNumber';
import { getRandomSample } from './getRandomSample';

export const tags: string[] = [];

export const getTags = (productName: string): string[] => {
  const randomInt = getRandomInt(2, 7);
  return getRandomSample(tags, randomInt);
};
