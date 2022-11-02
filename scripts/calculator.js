const isValid = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return false
  }

  return true
}

const add = (a, b) => {
  if (isValid(a, b)) {
    return a + b
  }

  return "X or Y is not a number!"
}

const substract = (a, b) => {
  if (isValid(a, b)) {
    return a - b
  }

  return "X or Y is not a number!"
}

const multiply = (a, b) => {
  if (isValid(a, b)) {
    return a * b
  }

  return "X or Y is not a number!"
}

const divide = (a, b) => {
  if (isValid(a, b)) {
    return a / b
  }

  return "X or Y is not a number!"
}

const calculator = {
  add,
  substract,
  divide,
  multiply,
}

module.exports = calculator
