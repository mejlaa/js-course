//pangram

const isPangram = str => {
  let strArr = str.toLowerCase();
  let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < abc.length; i++) {
    if (strArr.indexOf(abc[i]) < 0) {
      return false;
    }
  }

  return true;
};

// console.log(isPangram('mejla ugljani suljovic'));
// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));

//moving zeros to the end

const moveZeros = arr => {
  for (let i = arr.length; i--; ) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
};
// ne valja resenje, nije moje

// console.log(moveZeros([0, 1, 3, 4, 0, 0, 5]));

const moveZeros2 = arr => {
  let zeros = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    }
    if (arr[i] !== 0) {
      result.push(arr[i]);
    }
  }

  return result.concat(zeros);
};

// console.log(moveZeros2([0, 1, 3, 4, 0, 0, 5, 0]));

const moveZeros3 = arr => {
  return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
};

// console.log(moveZeros3([0, 1, 3, 4, 0, 0, 5, 0]));

//is a number prime?

const isPrime = num => {
  if (num < 2) return false;

  const maxNum = Math.sqrt(num);

  for (let i = 2; i <= maxNum; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPrime(29));
