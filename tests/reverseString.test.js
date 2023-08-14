import { reverseString } from "../src/reverseString";

test("Returns a reversed string", () => {
  expect(reverseString("live")).toBe("evil");
});
