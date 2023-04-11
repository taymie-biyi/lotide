const assert = require('chai').assert;

const letterPositions = require('../letterPositions');


describe("#letterPositions", () => {
  it("returns ['3', '5', '15', '18'] when source code is ('lighthouse in the house').h,", () => {

    const sourceCode = letterPositions('lighthouse in the house').h;
    assert.deepEqual(sourceCode, ['3', '5', '15', '18']);
  });

  it("returns ['2', '3'] when source code is letterPositions('hello').l,", () => {

    const sourceCode = letterPositions("hello").l;
    assert.deepEqual(sourceCode, ['2', '3']);
  });
});