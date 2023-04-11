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


module.exports = takeUntil;