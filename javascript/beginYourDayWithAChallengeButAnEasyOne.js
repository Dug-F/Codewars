function oneTwoThree(n) {
    // justDoIt!!
    const firstNumber = Array(Math.floor(n / 9)).fill(9).concat([n % 9]).join('');
    const secondNumber = n === 0 ? '0' : Array(n).fill(1).join('');
    return[firstNumber, secondNumber];
}

console.log(oneTwoThree(19));