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

const without = function(source, itemsToRemove) {
  let newArr = source.slice();
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (newArr.includes(itemsToRemove[i])) {
      newArr.splice(newArr.indexOf(itemsToRemove[i]), 1);
    }
  }
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without(["1", "2", "3"], [1, 2, "3"]));
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

console.log(without([1, 2, 3], [1, "2"]));
assertArraysEqual([1, 2, 3], [1, 2, 3]);
