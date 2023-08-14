export const capitalize = (string) => {
  let chars = string.split("");
  chars[0] = chars[0].toUpperCase();

  let capitalizedString = "".concat(...chars);

  return capitalizedString;
};
