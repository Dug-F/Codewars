function firstNonRepeatingLetter(s) {
  const letterCount = {};
  const sArray = [...s]
  
  sArray.forEach((letter) => {
    const letterLower = letter.toLowerCase()
    if (letterCount.hasOwnProperty(letterLower)) {
      letterCount[letterLower]++;
    } else {
      letterCount[letterLower] = 1;
    }
  })
//   console.log(letterCount);
  
  for (i = 0, length = s.length; i < length; i++) {
    if (letterCount[s[i].toLowerCase()] === 1) {
    //   console.log(s[i]);
      return s[i];
    }
  }
  return '';
}

console.log(firstNonRepeatingLetter('hello'));