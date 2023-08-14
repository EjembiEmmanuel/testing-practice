import { capitalize } from "../src/capitalize";

test("Returns a string with the first character capitalized", () => {
  expect(capitalize("oche")).toBe("Oche");
});
