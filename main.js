/******************
 * YOUR CODE HERE *
******************/
function doubleAll(input){
  const doubleArr = [];
  for(let i = 0; i < input.length; i ++){
    doubleArr.push(input[i] * 2);
  }
  return doubleArr;
}

function yelledGreetings(input){
  const greeting = [];
  for(let i = 0; i < input.length; i ++){
    greeting.push(input[i] + '!');
  }
  return greeting;
}

function absoluteValues(input){
  const absolute = [];
  for(let i = 0; i < input.length; i++){
    const inPut = Math.abs(input[i]);
    absolute.push(inPut);      
  }
  return absolute;
}

function upperCaseFirstLetters(input){
  const upperCase = [];
  for(let i = 0; i < input.length; i++){
    upperCase.push(input[i].charAt(0).toUpperCase() + input[i].toLowerCase().slice(1));
  }
  return upperCase;
}

function changeToInitials(input){
  const initials = [];
  for(let i = 0; i < input.length; i++){
    initials.push(input[i].toUpperCase().charAt(0) + input[i].substring(input[i].indexOf(' ')).charAt(1));
  }
  return initials;
}

function doubleOdd(input){
  const odd = [];
  for(let i = 0; i < input.length; i++){
    if(input[i] % 2 == 1 || input[i] % 2 == -1){
    odd.push(input[i] *= 2)
    } else { 
      odd.push(input[i]);
    }
  }
  console.log(odd)
  return odd;
}
doubleOdd([1, 2, 3, 4, 101, 0, 32.5]);
// doubleOdd([-5, -1, -100, -2])
doubleOdd([-1, -3, 1000])

function add1ToLeft(input){
  const left = [];
  for(let i = 0; i < input.length; i++){
    if(input[i] < 0){
      left.push(('-1' + Math.abs(input[i])) * 1)
    } else {
    left.push(('1' + input[i]) * 1);
    }
  }
  console.log(left);
  return left;
}
// add1ToLeft([1, 2, 30, 400]); 
// add1ToLeft([-1, -50]);


/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
