function comp(array1, array2) {
  if (array1 === null || array2 === null || array1.length !== array2.length) {
    return false;
  }
  const squares = {};
  array2.map((value) => {
    if (squares.hasOwnProperty(value)) {
      squares[value]++;
    } else {
      squares[value] = 1;
    }
  });

  for (let i = 0, length = array1.length; i < length; i++) {
    const key = array1[i] * array1[i];
    if (!squares.hasOwnProperty(key) || squares[key] === 0) {
      return false;
    } else {
      squares[key]--;
    }
  }
  return true;
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]));
