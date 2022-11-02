const cesarCipher = require("../scripts/cesarCipher")

test("Test with all string", () => {
  expect((cesarCipher("abc"))).toBe("def")
})

test("Numbers", () => {
  expect((cesarCipher(123))).toBe("Not string value")
})

test("Numbers as string", () => {
  expect((cesarCipher("123"))).toBe("123")
})

test("Uppercase string", () => {
  expect((cesarCipher("AbC"))).toBe("DeF")
})
