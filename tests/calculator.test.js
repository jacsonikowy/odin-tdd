const calculator = require("../scripts/calculator.js")

test("Adding 2+2", () => {
  expect(calculator.add(2, 2)).toBe(4)
})

test("Substracting 10-2", () => {
  expect(calculator.substract(10, 2)).toBe(8)
})

test("Multiplying 2*2", () => {
  expect(calculator.multiply(2, 2)).toBe(4)
})

test("Dividing 10/2", () => {
  expect(calculator.divide(10, 2)).toBe(5)
})

test("Numbers", () => {
  expect(calculator.add("2", 5)).toBe("X or Y is not a number!")
})

test("Numbers 2", () => {
  expect(calculator.substract("b", 9)).toBe("X or Y is not a number!")
})

test("Numbers 3", () => {
  expect(calculator.multiply(8, "234")).toBe("X or Y is not a number!")
})

test("Numbers 4", () => {
  expect(calculator.divide("2345", 23)).toBe("X or Y is not a number!")
})
