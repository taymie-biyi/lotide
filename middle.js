
const middle = function(array) {
  let middleArray = [];
  let index = 0;
  
  if (array.length <= 2) {
    return middleArray;
  }

  if (array.length % 2 === 1) {
    index = (array.length - 1) / 2;
    middleArray.push(array[index]);
    return middleArray;
  }
  
  index = (array.length / 2);
  middleArray.push(array[index - 1], array[index]);
  return middleArray;
  
};


module.exports = middle;

