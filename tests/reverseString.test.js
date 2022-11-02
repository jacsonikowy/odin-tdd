const reverseString = require("../scripts/reverseString")

test("Reverse String", () => {
  expect(reverseString("Owca")).toBe("acwO")
})

test("numbers", () => {
  expect(reverseString(34523)).toBe("It is not a string")
})
