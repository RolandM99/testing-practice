const stringLength = (string) => {
  let stringL = string.length;
  if(stringL >= 1 && stringL <= 10) {
      return stringL;
  } else {
      throw "The conditions fixed are not met";
  }
}

const reverseString = (string) => {
  return string.split("").reverse().join("");
}

module.exports = { stringLength, reverseString}