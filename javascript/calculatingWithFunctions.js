function zero(fn) {return !fn ? 0 : fn(0)};
function one(fn) {return !fn ? 1 : fn(1)};
function two(fn) {return !fn ? 2 : fn(2)};
function three(fn) {return !fn ? 3 : fn(3)};
function four(fn) {return !fn ? 4 : fn(4)};
function five(fn) {return !fn ? 5 : fn(5)};
function six(fn) {return !fn ? 6 : fn(6)};
function seven(fn) {return !fn ? 7 : fn(7)};
function eight(fn) {return !fn ? 8 : fn(8)};
function nine(fn) {return !fn ? 9 : fn(9)};

function plus(n) {return (num) => n + num;}
function minus(n) {return (num) => n - num;}
function times(n) {return (num) => n * num;}
function dividedBy(n) {return (num) => parseInt(n / num); }

console.log(seven(times(three())));
