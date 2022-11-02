const analyzeArray = (array) => {

  if (typeof array !== "object") {
    return "It is not an array"
  }

  if (array.length === 0) {
    return "Empty array"
  }

  let avg = 0;
  let min = array[0];
  let max = 0;

  for (let i in array) {

    if (typeof array[i] !== "number") {
      return "Array has string inside"
    }

    if (array[i] < min) {
      min = array[i]
    }

    if (array[i] > max) {
      max = array[i]
    }

    avg += array[i]

  }

  avg = avg / array.length

  let object = {
    average: avg,
    min: min,
    max: max,
    length: array.length
  }

  return object
}

module.exports = analyzeArray

