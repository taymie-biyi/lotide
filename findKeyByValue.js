
const findKeyByValue = function(object, value) {
  const objectArray = Object.keys(object);
  for (const obj of objectArray) {
    if (object[obj] === value) {
      return obj;
    }
  }
  return undefined;
};


module.exports = findKeyByValue;