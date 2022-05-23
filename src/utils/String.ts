const UpperFistLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const SplitLargePrice = (str: string): string => {
  if (str == "") return "";

  let resultat: string | undefined = str
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    ?.reverse()
    .join(" ");

  return resultat == undefined ? "" : resultat;
};

export { UpperFistLetter, SplitLargePrice };
