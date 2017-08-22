// Do not change any of the function names

function getBiggest(x, y) {
    if (x > y) {
      return x;
    }else if (y > x) {
      return y;
    }else
      return x || y;
}

function greeting(language) {
  if (language==='German') {
    return 'Guten Tag!';
  }
  if (language==='English') {
    return 'Hello!';
  }
  if (language==='Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  if ( num === 10 || num === 5) {
    return true;
  }else 
    return false;
}

function isInRange(num) {
    if (num < 50 && num > 20){
      return true;
    }else 
      return false;
}

function isInteger(num) {
  if (Number.isInteger(num)) {
    return true;
  }else
    return false;
}

function fizzBuzz(num) {
    if (num % 3 ===0  && num % 5 ===0){
      return 'fizzbuzz';
    }else if (num % 3 ===0){
      return 'fizz';
    }else if (num % 5 ===0){
      return 'buzz';
    }else
      return num;
}

function isPrime(num) {
     var start = 2;
    while (start <= Math.sqrt(num)) {
        if (num % start++ < 1) return false;
    }
    return num > 1;
}
function returnFirst(arr) {
    return arr[0];
}

function returnLast(arr) {
  return arr[arr.length -1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for (var i = 0; i < arr.length; i++){
    arr[i]  += 1;

}
return arr;
}

function addItemToArray(arr, item) {
    arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
    arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
  return words.join(' ');
}

function contains(arr, item) {
  return arr.indexOf(item) > -1;
}

function addNumbers(numbers) {

var sum = numbers.reduce(function(runningTotal, num){
  return runningTotal += num;
});
return sum;
}

function averageTestScore(testScores) {
  var base = 0;
  for (var i = 0; i < testScores.length; i++) {
     base += testScores[i];
  }
  return (base/testScores.length);
}

function largestNumber(numbers) {
var largest = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (largest < numbers[i] ) {
        largest = numbers[i];
  return largest;
}}}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
