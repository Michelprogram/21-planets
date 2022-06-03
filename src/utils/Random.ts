const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomNotFloor = (min: number, max: number): number => {
  const res: string = (Math.random() * (max - min) + min).toFixed(2);
  return parseFloat(res);
};

const randomS = (min: number, max: number): string => {
  return "" + Math.floor(Math.random() * (max - min) + min);
};

const randomNotFloorS = (min: number, max: number): string => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const randomItemFromArray = (array: Array<any>) => {
  return array[random(0, array.length)];
};

export {
  random,
  randomS,
  randomNotFloor,
  randomNotFloorS,
  randomItemFromArray,
};
