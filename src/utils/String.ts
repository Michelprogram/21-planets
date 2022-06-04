const UpperFistLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const ReadablePrice = (str: string | number): string => {
  let afterDot: string = "";

  if (str == "") return "0";

  if (typeof str == "number") {
    str = str + "";
  }

  if (str.includes(".")) {
    [str, afterDot] = str.split(".");
  }

  let resultat: string | undefined = str
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    ?.join(" ")
    .split("")
    .reverse()
    .join("");

  if (afterDot != "" && resultat != undefined) {
    resultat += "." + afterDot;
  }

  return resultat == undefined ? "" : resultat;
};

export { UpperFistLetter, ReadablePrice };
