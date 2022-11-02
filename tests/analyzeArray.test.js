const analyzeArray = require("../scripts/analyzeArray")

test("Default array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("Numbers", () => {
  expect(analyzeArray(1234)).toBe("It is not an array")
})

test("Empty array", () => {
  expect(analyzeArray([])).toBe("Empty array")
})

test("In array string", () => {
  expect(analyzeArray([1, 2, "4", 5])).toBe("Array has string inside")
})
