const assert = require('chai').assert;

const findKeyByValue = require('../findKeyByValue');


describe("#findKeyByValue", () => {
  it("returns 'drama' for source object, when the value is 'The Wire'", () => {

    const sourceCode = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const value = "The Wire";
    assert.strictEqual(findKeyByValue(sourceCode, value), 'drama');
  });

  it("returns undefined for source object, when the value is 'That '70s Show'", () => {

    const sourceCode = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const value = "That '70s Show";

    assert.strictEqual(findKeyByValue(sourceCode, value), undefined);
  });
});