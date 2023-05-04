// Declare the myGlobal variable below this line
const myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal here
}

// Only change code above this line

function fun2() {
  oopsGlobal = 5;
  let output = '';
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal: ' + myGlobal;
  }
  if (typeof oopsGlobal != 'undefined') {
    output += ' oopsGlobal: ' + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
  // Only change code below this line
  const myVar = 'bb';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

const outerWear = 'T-Shirt';

function myOutfit() {
  // Only change code below this line
  const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
console.log(addFive());

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
// Only change code below this line

console.log(processed);

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  item = arr.shift();
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return 'Yes, that was true';
  } else {
    return 'No, that was false';
  }

  // Only change code above this line
}

// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

testEqual(10);

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

testStrict(10);

function orderMyLogic(val) {
  if (val < 5) {
    return 'Less than 5';
  } else if (val < 10) {
    return 'Less than 10';
  } else {
    return 'Greater than or equal to 10';
  }
}

orderMyLogic(7);
