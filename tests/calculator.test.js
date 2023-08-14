import { calculator } from "../src/calculator";

test("Returns the sum of two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Returns the difference of two numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Returns the quotient of two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("Returns the product of two numbers", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});
