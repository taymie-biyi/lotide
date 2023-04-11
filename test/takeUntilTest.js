const assert = require('chai').assert;

const takeUntil = require('../takeUntil');


describe("#without", () => {
  it("returns [1, 2, 5, 7, 2] when source array is [1, 2, 5, 7, 2, -1, 2, 4, 5], and callbackFunction, (x => x < 0) is truthy", () => {

    const sourceCode = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  
    assert.deepEqual(takeUntil(sourceCode, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("returns ['I've', 'been', 'to', 'Hollywood'] when source array is ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'], and callbackFunction, (x => x === ',') is truthy", () => {

    const sourceCode = ["I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood'];
  
    assert.deepEqual(takeUntil(sourceCode, x => x === ','), ["I've", 'been', 'to', 'Hollywood']);
  });
});