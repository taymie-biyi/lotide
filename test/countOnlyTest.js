const assert = require('chai').assert;

const countOnly = require('../countOnly');


describe("#countOnly", () => {
  
  it("returns undefined because 'Karima' is not listed in the array of names and it's value is true in the comparison object" , () => {
    const names = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const compareName = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const result = countOnly(names, compareName);
    
    assert.strictEqual(result["Karima"], undefined);
  });
  
  it("returns undefined because 'Agouhanna' appears in the list of names, but is listed as false in the comparison array of names" , () => {
    
    const names = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const compareName = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const result = countOnly(names, compareName);
    
    assert.strictEqual(result["Karima"], undefined);
  });
  
  it("returns '1' because 'Jason' appears once in the array of names and it's value is true in the comparison object", () => {

    const names = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const compareName = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const result = countOnly(names, compareName);

    assert.strictEqual(result["Jason"], 1);
  });

  it("returns '2' because 'Fang' is appears twice in the array of names and it's value is true in the comparison object" , () => {

    const names = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const compareName = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const result = countOnly(names, compareName);

    assert.strictEqual(result["Fang"], 2);
  });

});