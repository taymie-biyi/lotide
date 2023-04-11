
const eqArrays = function(arr1,arr2) {
  const value1 = arr1.length;
  const value2 = arr2.length;
  if (value1 !== value2) {
    return false;
  }
  
  for (const val in arr1) {
    if (arr1[val] !== arr2[val]) {
      return false;
    }
  }

  return true;
};


module.exports = eqArrays;