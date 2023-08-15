import { caeserCipher } from "../src/caesercCipher";

test("Takes a string and returns an encrypted ceaser cipher", () => {
  expect(caeserCipher("Valar Morghulis", 5)).toBe("Afqfw Rtwlmzqnx");
});

test("Takes a string and returns an encrypted ceaser cipher", () => {
  expect(caeserCipher("Oche!", 6)).toBe("Uink!");
});

test("Takes a string and returns an encrypted ceaser cipher", () => {
  expect(caeserCipher("'Winter is coming.'", 1)).toBe("'Xjoufs jt dpnjoh.'");
});
