const toJadenCase = str => {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

//soluton 1
const maskify = cc => {
  const x = cc.split('');
  const last4 = x.splice(-4);
  const y = x.toString().replace(/["0-9A-Za-z"]/g, '#');

  return y.split(',').join('') + last4.join('');
};

//solution 2
const maskify2 = cc => {
  cc = cc.split('');
  for (let i = 0; i < cc.length - 4; i++) {
    cc[i] = '#';
  }
  cc = cc.join('');
  return cc;
};

// console.log('4556364607935616');
// console.log(maskify('4556364607935616'));

// console.log('4556364607935616');
// console.log(maskify2('4556364607935616'));

//FIND THE ODD INT PITAJ!!!!!

// function findOdd(A) {
//   //count the numbers and push them into the array
//   //find the odd number and  return index value
//   let count = 0;
//   let final = [];
//   let index = 0;
//   for (let i = 0; i < A.length; i++) {
//     let t = A[i];
//     for (let j = 0; j < A.length; j++) {
//       if (t == A[j]) {
//         count = count + 1;
//       }
//     }
//     // console.log(count);
//     final.push(count);
//     console.log(final);
//   }
//   for (let i = 0; i < final.length; i++) {
//     if (final[i] % 2 != 0) {
//       index = i;
//       break;
//     }
//   }
//   console.log(index);
//   return A[index];
// }

// console.log(findOdd([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 0]));

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const getCount = str => {
  let vowelsCount = 0;
  str = str.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i of str) {
    if (vowels.includes(i)) vowelsCount++;
  }

  return vowelsCount;
};

// console.log(getCount('mejla'));
// console.log(getCount('mejlaa'));
// console.log(getCount('meejjsuu'));

const arrayDiff = (a, b) => {
  return a.filter(e => !b.includes(e));
};

// console.log(arrayDiff([1, 2, 3], [3]));
