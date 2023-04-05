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

const middle = function(array) {
  let middleArray = [];
  let index = 0;
  
  if (array.length <= 2) {
    return middleArray;
  }

  if (array.length % 2 === 1) {
    index = (array.length - 1) / 2;
    middleArray.push(array[index]);
    return middleArray;
  } else {
    index = (array.length / 2);
    middleArray.push(array[index - 1], array[index]);
    return middleArray;
  }
};

console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);

