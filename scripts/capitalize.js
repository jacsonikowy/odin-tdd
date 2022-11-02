const capitalize = (string) => {

  if (typeof string !== "string") {
    return "It is not a string"
  }

  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}

module.exports = capitalize;
