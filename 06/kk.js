function translatePigLatin(str) {
  let str1 = str.split("");

  let str2;

  str1.toLowerCase;

  let k = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str1[0] === "a" ||
      str1[0] === "e" ||
      str1[0] === "i" ||
      str1[0] === "o" ||
      str1[0] === "u"
    ) {
      break;
    }

    k++;

    if (k === str1.length - 1) {
      let temp1 = str1[0];

      for (let i = 0; i < str.length; i++) {
        str2[i] = str2[i + 1];
      }

      str2[str1.length - 1] = temp1;
    }
  }

  if (
    str1[0] === "a" ||
    str1[0] === "e" ||
    str1[0] === "i" ||
    str1[0] === "o" ||
    str1[0] === "u"
  ) {
    str1.push("way");

    str2 = str1.join("");

    console.log(str2);

    return str2;
  }

  let j = 0;

  while (true) {
    if (
      str1[0] !== "a" ||
      str1[0] !== "e" ||
      str1[0] !== "i" ||
      str1[0] !== "o" ||
      str1[0] !== "u"
    ) {
      let temp = str1[0];

      for (let i = 0; i < str1.length; i++) {
        str1[i] = str1[i + 1];
      }

      str1[str1.length - 1] = temp;

      if (
        str1[0] === "a" ||
        str1[0] === "e" ||
        str1[0] === "i" ||
        str1[0] === "o" ||
        str1[0] === "u"
      ) {
        str1[str1.length - 1] = temp;

        str1.push("a");

        str1.push("y");

        str2 = str1.join("");

        break;
      }

      j++;

      if (j == str1.length) {
        break;
      }
    }
  }

  console.log(str2);

  return str2;
}

translatePigLatin("ccccconsonant");
