const setClassName = (...name: Array<string>): string => {
  let result: string = "";

  result = name.reduce((p, n) => p + " " + n);

  console.log(result);

  return result;
};

export default setClassName;
