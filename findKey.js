
const findKey = function(object, callback) {
  let result = '';
  const objectArray = Object.keys(object);
  for (const val of objectArray) {
    if (callback(object[val])) {
      result = val;
      break;
    }
  }
  return result;
};


module.exports = findKey;