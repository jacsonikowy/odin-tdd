const calc = () => {
  const add = (a, b) => {
    return a + b
  }

  return {
    add
  }
}

const calculator = calc()

module.exports = calculator
