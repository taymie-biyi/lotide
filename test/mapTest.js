const assert = require('chai').assert;

const map = require('../map');


describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] when source array is ['ground', 'control', 'to', 'major', 'tom'], and callbackFunction is (s => s[0])", () => {

    const sourceCode = ['ground', 'control', 'to', 'major', 'tom'];
  
    assert.deepEqual(map(sourceCode, s => s[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("returns [''', 'e', 'o', 'o', 'n', 'o', 'e'] when source array is ['I've', 'been', 'to', 'Hollywood', 'and', 'to', 'Redwood'], and callbackFunction is (s => s[-1])", () => {

    const sourceCode = ["I've", 'been', 'to', 'Hollywood', 'and', 'to', 'Redwood'];
  
    assert.deepEqual(map(sourceCode, s => s[1]), ["'", 'e', 'o', 'o', 'n', 'o', 'e']);
  });
});