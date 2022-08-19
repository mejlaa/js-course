function derive(coefficient, exponent) {
  let multiply = coefficient * exponent;

  return console.log(`${multiply}x^${exponent - 1}`);
}

function findNeedle(haystack) {
  // your code here
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return 'found the needle at position ' + i;
    }
  }
}

// console.log(
//   findNeedle(['bla', 'blaaaa', undefined, 'kjkjd', true, 'needle', false])
// );

const simpleMultiplication = number =>
  number % 2 == 0 ? number * 8 : number * 9;

//
//
//
//
//
//
// Create a function with two arguments that will return an array of the first (n) multiples of (x).

const countBy = (x, n) => {
  let arr = [];
  for (i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
};

// console.log(countBy(2, 6));

const betterThanAverage = (classPoints, yourPoints) => {
  let classAvg = 0;
  for (let i = 0; i < classPoints.length; i++) {
    classAvg += classPoints[i];
  }
  classAvg = classAvg / classPoints.length;

  return yourPoints > classAvg;

  // const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;
  // return average > yourPoints ? false : true;
};

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

// Very simple, given an integer or a floating-point number, find its opposite.

const opposite = num => {
  num = num * -1;
  return num;
};
// console.log(opposite(-8));

const reverse = str => {
  return str.split('').reverse().join('');
};

// console.log(reverse('mejla'));

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const doubleChar = str => {
  // // Your code here
  const strArr = str.split('');

  // return newStrArr.join('');

  // const newStr = strArr.filter((item, index) => strArr.indexOf(item) === index);

  // return newStr.join('');
  const newStrArr = [];
  for (let i = 0; i < strArr.length; i++) {
    newStrArr.push(strArr[i]);
    newStrArr.push(strArr[i]);
  }

  return newStrArr.join('');
};

// console.log(doubleChar('Mmejla'));

const bmi = (weight, height) => {
  let bmi = weight / (height * height);

  if (bmi <= 18.5) return 'Underweight';
  if (bmi <= 25) return 'Normal';
  if (bmi <= 30) return 'Overweight';
  if (bmi > 30) return 'Obese';
};

// console.log(bmi(73, 1.78));

const points = games => {
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) sum += 3;
    if (games[i][0] == games[i][2]) sum += 1;
  }
  return sum;
};

// function greet(name) {
//   str = `Hello, ${name} how are you doing today?`;

//   return str;
// }
const greet = name => `Hello, ${name} how are you doing today?`;

// console.log(greet('Mejla'));

const repeatString = (n, s) => {
  return s.repeat(n);
};

// console.log(repeatString(3, ' mejla'));

const openOrSenior1 = data => {
  return data.map(member => {
    return member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open';
  });
};

const openOrSenior = data => {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) output.push('Senior');
    else output.push('Open');
  }

  return output;
};

// console.log(
//   openOrSenior([
//     [18, 20],
//     [45, 2],
//     [61, 12],
//     [37, 6],
//     [21, 21],
//     [78, 9],
//   ])
// );

const summation = num => {
  let sum = 0;
  for (let i = 0; i <= num; i++) sum += i;

  return sum;
};

// console.log(summation(4));
