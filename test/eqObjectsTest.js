const assert = require('chai').assert;

const eqObjects = require('../eqObjects');


describe("#eqObjects", () => {
  
  it("returns false when the length of keys of the object1 and object2 are not the same", () => {
    const object1 = { size: "medium", color: "red", sleeveLength: "long" };
    const object2 = { size: "medium", color: "red" };
    
    assert.isFalse(eqObjects(object1, object2));
  });
  
  it("returns false when the length of the values of the keys of object1 and object2 are not the same", () => {
    const object1 = { colors: ["red", "blue"], size: "medium" };
    const object2 = { size: "medium", color: "red" };
    
    assert.isFalse(eqObjects(object1, object2));
  });
  
  it("returns false when values of  object1 and object2 are not the same", () => {
    const object1 = { color: "red", size: "medium" };
    const object2 = { size: "medium", color: "blue" };
    
    assert.isFalse(eqObjects(object1, object2));
  });
  
  it("returns true when values of  object1 and object2 are the same", () => {
    const object1 = { color: "red", size: "medium" };
    const object2 = { size: "medium", color: "red" };
  
    assert.isTrue(eqObjects(object1, object2));
  });
});
