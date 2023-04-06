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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject));
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject));
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);