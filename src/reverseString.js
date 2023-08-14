export const reverseString = (string) => {
  let chars = string.split("");
  chars = chars.reverse();

  let reversedString = "".concat(...chars);

  return reversedString;
};
