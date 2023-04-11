
const without = function(source, itemsToRemove) {
  let newArr = source.slice();

  for (let i = 0; i < itemsToRemove.length; i++) {
    if (newArr.includes(itemsToRemove[i])) {
      newArr.splice(newArr.indexOf(itemsToRemove[i]), 1);
    }
  }
  
  return newArr;
};

module.exports = without;