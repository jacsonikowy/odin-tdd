let alphabet = "abcdefghijklmnopqrstuvwxyz"
let cipher = "defghijklmnopqrstuvwxyzabc"

const cesarCipher = (string) => {

  if (typeof string !== "string") {
    return "Not string value"
  }

  let newString = ""

  for (let i in string) {
    if (isUpperCase(string[i])) {
      newString += singleLowerCipher(string[i].toLowerCase()).toUpperCase()
    } else if (isLowerCase(string[i])) {
      newString += singleLowerCipher(string[i])
    } else {
      newString += string[i]
    }
  }

  return newString
}

const singleLowerCipher = (char) => {
  const index = alphabet.indexOf(char)
  return cipher[index]
}

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char !== char.toLowerCase()) {
    return true
  }
  return false
}

const isLowerCase = (char) => {
  if (char === char.toLowerCase() && char !== char.toUpperCase()) {
    return true
  }
  return false
}

module.exports = cesarCipher
