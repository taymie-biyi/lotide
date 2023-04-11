const assert = require('chai').assert;

const eqArrays = require('../eqArrays');


describe("#eqObjects", () => {
  
  it("returns false when the length of array1 and array2 are not the same", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3, 4];
    
    assert.isFalse(eqArrays(array1, array2));
  });
  
  it("returns false when the data type of a value in array1 and array2 are not the same", () => {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", 2, "3"];
    
    assert.isFalse(eqArrays(array1, array2));
  });
  
  it("returns false when values of  array1 and array2 are not the same", () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 2, 1];
    
    assert.isFalse(eqArrays(array1, array2));
  });
  
  it("returns true when values, length and data type of array1 and array2 are the same", () => {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", "3"];
  
    assert.isTrue(eqArrays(array1, array2));
  });
});
