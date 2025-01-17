console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, '+ name;
}
// Remember to call the function to test
console.log(helloName('Alex'))

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  sum = firstNumber + secondNumber;
  // return firstNumber + secondNumber;
  return sum;
}
console.log(addNumbers(1, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  sum = firstNumber * secondNumber * thirdNumber;
  // return firstNumber * secondNumber * thirdNumber;
  return sum;
}
console.log(multiplyThree(2, 2, 5))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
console.log(isPositive(-5))
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log('neat it worked')

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
const testArray = ['a', 'b', 'c']
function getLast() {
  lastItem = testArray.length-1;
return (testArray[lastItem]);
}
console.log(getLast())
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(let i=0; i<array.length; i++){
   if(value === array[i]){
    return true;
    }
    else{
    return false;
    }
  }
}
console.log(find('a', testArray))
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let text = "apple";
function isFirstLetter(letter, text) {
  let myArray = text.split("");
  if (myArray[0] === letter){
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
const numArray = [1, 2, 3, 4, 0, -1];
function sumAll( array ) {
  let sum = 0
  for (let i = 0; i<array.length; i++){
    sum += array[i]
    console.log(sum)
  }
  // TODO: loop to add items
  return sum;
}
console.log(sumAll(numArray))
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let posArray = [];
function sortPosNums(array, array2){
  for(let i = 0; i<array.length; i++){
  if ( array[i] > 0 ){
    array2.push(array[i])
    console.log(array2)}
  }
    return array2;
}
console.log(sortPosNums(numArray, posArray))


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
