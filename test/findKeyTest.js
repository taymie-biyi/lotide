const assert = require('chai').assert;

const findKey = require('../findKey');


describe("#findKey", () => {
  it("returns 'noma' for source object, when give callback (x => x.stars === 2)", () => {

    const sourceCode = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };

    assert.strictEqual(findKey(sourceCode, x => x.stars === 2), 'noma');
  });

  it("returns 'Blue Hill' for source object, when give callback (x => x.stars === 1)", () => {

    const sourceCode = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };

    assert.strictEqual(findKey(sourceCode, x => x.stars === 1), 'Blue Hill');
  });
});