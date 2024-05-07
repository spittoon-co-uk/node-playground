let x = 10;
let y = 3;
let z = x % y;
console.log(z);
console.log(`this a backtick-quoted string with a ${z * 100} variable calculated on-the-fly`);
console.log(typeof `this a backtick-quoted string with a ${z * 100} variable`);
console.log(8 * null);
console.log("5" - 1);
console.log("five" + 2);
console.log(false == 0);
console.log(null || "user"); // This is how we fall back when the left-hand value evaluates as falsey
console.log("Agnes" || "user");
console.log(true ? "evaluated to true" : "evaluated to false");
console.log(y ? y : "evaluated to false");