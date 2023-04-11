
const countLetters = function(sentence) {
  const result = {};
  const word = sentence.replaceAll(" ", "");

  for (let letter of word) {
    (result[letter]) ++ || ((result[letter]) = 1);
  }
  return result;
};


module.exports = countLetters;