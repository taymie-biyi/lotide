const takeUntil = function(array, callback) {
  let results = [];
  for (const i in array) {
    if (callback(array[i])) { 
      results = array.slice(0, i);
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

console.log(takeUntil(data1, x => x < 0));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

console.log(takeUntil(data2, x => x === ','));
