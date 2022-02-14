export function getRandomSample<T>(array: Array<T>, n: number): Array<T> {
  const shuffled = array.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffled
  return shuffled.slice(0, n);
}
