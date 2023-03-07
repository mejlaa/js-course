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

console.log(isPangram('mejla ugljani suljovic'));
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
