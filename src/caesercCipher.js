export const caeserCipher = (string, k) => {
  const charCodes = Array.from(Array(26)).map((e, i) => i + 65);
  const upperCaseAlphabets = charCodes.map((x) => String.fromCharCode(x));
  const lowerCaseAlphabets = charCodes.map((x) =>
    String.fromCharCode(x).toLowerCase()
  );
  const punctuation = [".", ",", "?", "!", "'", '"', " "];

  const chars = string.split("");
  const cipherChars = [];

  for (let char of chars) {
    if (upperCaseAlphabets.includes(char)) {
      let index = upperCaseAlphabets.indexOf(char);
      let cipherIndex = index + k;
      if (cipherIndex > 25) {
        cipherIndex = cipherIndex - 26;
      }
      cipherChars.push(upperCaseAlphabets[cipherIndex]);
    } else if (lowerCaseAlphabets.includes(char)) {
      let index = lowerCaseAlphabets.indexOf(char);
      let cipherIndex = index + k;
      if (cipherIndex > 25) {
        cipherIndex = cipherIndex - 26;
      }
      cipherChars.push(lowerCaseAlphabets[cipherIndex]);
    } else if (punctuation.includes(char)) {
      cipherChars.push(char);
    }
  }

  const cipherText = "".concat(...cipherChars);

  return cipherText;
};
