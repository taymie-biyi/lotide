// const assert = require('chai').assert;

const assertObjectsEqual = require('../assertObjectsEqual');



const object1 = { size: "medium", color: "red", sleeveLength: "long" };
const object2 = { size: "medium", color: "red" };
assertObjectsEqual(object1, object2);

const object3 = { colors: ["red", "blue"], size: "medium" };
const object4 = { size: "medium", color: "red" };
assertObjectsEqual(object4, object3);

const object5 = { color: "red", size: "medium" };
const object6 = { size: "medium", color: "blue" };
assertObjectsEqual(object6, object5);

const object7 = { color: "red", size: "medium" };
const object8 = { size: "medium", color: "red" };
assertObjectsEqual(object8, object7);

