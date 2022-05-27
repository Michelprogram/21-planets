const UpperFistLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const ReadablePrice = (str: string | number): string => {
  if (str == "") return "";

  if (typeof str == 'number'){
    str = str + ""
  }

  let resultat: string | undefined = str
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    ?.join(" ")
    .split("")
    .reverse()
    .join('')
    

  return resultat == undefined ? "" : resultat;
};

export { UpperFistLetter, ReadablePrice };
