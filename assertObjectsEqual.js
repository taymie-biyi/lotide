

const eqArrays = function(arr1,arr2) {
  let response = 1;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      response *= 1;
    } else {
      response *= 0;
    }
  }
  return (response) ? true : false;
};

const eqObjects = function(object1, object2) {
  const objArr1 = Object.keys(object1);
  const objArr2 = Object.keys(object2);
  let results = 1;
  if (objArr1.length === objArr2.length) {
    for (const key of objArr1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        results = eqArrays(object1[key], object2[key]);
      } else if (object1[key] === object2[key]) {
        results *= 1;
      } else {
        results *= 0;
      }
    }
  } else {
    results *= 0;
  }
  return (results) ? true : false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
