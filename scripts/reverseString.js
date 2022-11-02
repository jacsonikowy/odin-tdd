const reverseString = (string) => {

  if (typeof string !== "string") {
    return "It is not a string"
  }

  let arr = []

  for (let i in string) {
    arr.push(string[i])
  }

  return arr.reverse().join("").toString()
}

module.exports = reverseString;
