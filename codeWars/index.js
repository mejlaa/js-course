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

console.log(reverse('mejla'));
