const assert = require('chai').assert;

const countLetters = require('../countLetters');


describe("#without", () => {
  it("returns { i: 5, l: 1, v: 1, e: 2, n: 3, w: 1, p: 1, g: 1 }, when the source code is 'i live in winnipeg'", () => {

    const sourceCode = 'i live in winnipeg';

    assert.deepEqual(countLetters(sourceCode), {i: 5, l: 1, v: 1, e: 2, n: 3, w: 1, p: 1, g: 1});
  });
});