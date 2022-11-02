const calc = require("../scripts/calc1.js")

test("adding", () => {
  expect(calc.add(2, 2)).toBe(4)
})
