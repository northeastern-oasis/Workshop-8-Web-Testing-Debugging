function sum(num1, num2) {
  return num1+num2;
}

test("does foo", () => {
  expect(sum(1, 2)).toBe(3);
})