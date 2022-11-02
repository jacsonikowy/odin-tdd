const capitalize = require("../scripts/capitalize")

test("capitalize", () => {
  expect(capitalize("owca")).toBe("Owca");
});

test("Numbers", () => {
  expect(capitalize(123)).toBe("It is not a string")
})
