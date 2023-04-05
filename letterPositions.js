const eqArrays = function(arr1,arr2) {
  let response = '';
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      response = true;
    } else {
      return false;
    }
  }
  return response;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " " && results[letter]) {
      results[letter].push(i);
    } else if (letter !== " ") {
      results[letter] = [i];
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);