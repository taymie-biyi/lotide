const countLetters = require('../countLetters');

const assertEqual = require('../assertEqual');


const test = "i live in winnipeg";
console.log(countLetters(test));

assertEqual(test, "i live in winnipeg");