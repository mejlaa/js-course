/*
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

orderMyLogic(7); */

const names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
];

function golfScore(par, strokes) {
  if (strokes == 1) return names[0];
  else if (strokes <= par - 2) return names[1];
  else if (strokes == par - 1) return names[2];
  else if (strokes == par) return names[3];
  else if (strokes == par + 1) return names[4];
  else if (strokes == par + 2) return names[5];
  else if (strokes >= par + 3) return names[6];
}

// console.log(golfScore(1, 4));

function caseInSwitch(val) {
  let answer = '';

  switch (val) {
    case 1:
      return 'alpha';
      break;
    case 2:
      return 'beta';
      break;
    case 3:
      return 'gamma';
      break;
    case 4:
      return 'delta';
      break;
    default:
      return 'there is nothing';
      break;
  }

  return answer;
}

// console.log(caseInSwitch(5));

function switchOfStuff(val) {
  let answer = '';

  switch (val) {
    case 'a':
      return 'apple';
    case 'b':
      return 'bird';
      break;
    case 'c':
      return 'cat';
      break;
    default:
      return 'stuff';
      break;
  }

  return answer;
}

// console.log(switchOfStuff('6'));

function sequentialSizes(val) {
  let answer = '';

  switch (val) {
    case 1:
    case 2:
    case 3:
      return 'Low';
      break;
    case 4:
    case 5:
    case 6:
      return 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      return 'High';
      break;
  }

  return answer;
}

// console.log(sequentialSizes(7));

function chainToSwitch(val) {
  let answer = '';

  switch (val) {
    case 'bob':
      return 'Marley';
      break;
    case 42:
      return 'The Answer';
      break;
    case 1:
      return 'There is no #1';
      break;
    case 99:
      return 'Missed me by this much!';
      break;
    case 7:
      return 'Ate Nine';
      break;
  }

  return answer;
}

// console.log(chainToSwitch('bob'));

function isLess(a, b) {
  //   if (a < b) return true;
  //   else return false;
  //same as this but cleaner
  return a <= b;
}

// console.log(isLess(10, 15));

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  if (count > 0) return count + ' Bet';
  else return count + ' Hold';
}

// console.log(cc(2));
// console.log(cc(7));
// console.log(cc('K'));
// console.log(cc('A'));

const myDog = {
  name: 'doggy',
  legs: 4,
  tails: 1,
  friends: ['mejla', 'suad', 'nesto'],
};

const testObj = {
  12: 'Nameth',
  16: 'Montana',
  19: 'Unites',
};
const playerNumber = 16;
const player = testObj[playerNumber];

// console.log(player);
testObj['12'] = 'Ugljanin';
// console.log(testObj);

testObj['22'] = 'Suljovic';
// console.log(testObj);

//using object instead switch/case or if/else statement
/*
switch (val) {
  case 'alpha':
    result = 'Adams';
    break;
  case 'bravo':
    result = 'Boston';
    break;
  case 'charlie':
    result = 'Chicago';
    break;
  case 'delta':
    result = 'Denver';
    break;
  case 'echo':
    result = 'Easy';
    break;
  case 'foxtrot':
    result = 'Frank';
}
*/

function phoneticLookup(val) {
  let result = '';

  const lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxTrot: 'Frank',
  };

  result = lookup[val];

  return result;
}

const lookup = {
  alpha: 'Adams',
  bravo: 'Boston',
  charlie: 'Chicago',
  delta: 'Denver',
  echo: 'Easy',
  foxTrot: 'Frank',
};

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) return obj[checkProp];
  else return 'Not Found';
}
// console.log(checkObj(lookup, 'mejla'));
