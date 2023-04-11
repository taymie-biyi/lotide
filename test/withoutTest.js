const assert = require('chai').assert;

const without = require('../without');


describe("#without", () => {
  it("returns ['hello', 'world'] when source array is ['hello', 'world', 'lighthouse'], and itemsToRemoveArray is ['lighthouse']", () => {

    const sourceCode = ["hello", "world", "lighthouse"];
    const itemsToRemoveArray = ["lighthouse"];

    assert.deepEqual(without(sourceCode, itemsToRemoveArray), ['hello', 'world']);
  });

  it("returns ['1', '2'] when source array is ['1', '2', '3'], and itemsToRemoveArray is [1, 2, '3']", () => {

    const sourceCode = ['1', '2', '3'];
    const itemsToRemoveArray = [1, 2, '3'];

    assert.deepEqual(without(sourceCode, itemsToRemoveArray), ['1', '2']);
  });

  it("returns [2, 3] when source array is [1, 2, 3], and itemsToRemoveArray is [1, '2']", () => {

    const sourceCode = [1, 2, 3];
    const itemsToRemoveArray = [1, '2'];
      
    assert.deepEqual(without(sourceCode, itemsToRemoveArray), [2, 3]);
  });
});

