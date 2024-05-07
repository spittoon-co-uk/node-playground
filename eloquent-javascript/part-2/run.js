let mood = "light", user = "Ayda", greeting = "Hello";
console.log(greeting, user, mood);
mood = "dark";
console.log(mood);
// console.log(newVariable); // This will throw errors because we haven't defined it
console.log(Math.min(2,4) + 100);

// understanding isNan
console.log(Number.isNaN(123));
console.log(Number.isNaN("123"));
console.log(Number.isNaN("word"));
console.log(Number.isNaN(false));
console.log(Number.isNaN(NaN)); // only this one returns true

////////////////////////////////////
// understanding while / do loops //
////////////////////////////////////
let whileNumber = 14;
while (whileNumber <= 12) {
    console.log(`we're while-ing: `, whileNumber);
    whileNumber = whileNumber + 2;
} // a while loop only executes as long as its condition is true

let doNumber = 14;
do {
    console.log(`we're do-ing: `, doNumber);
    doNumber = doNumber + 2;
} while (doNumber <= 12); // a do loop always executes its body once

/////////////////////////////
// understanding for loops //
/////////////////////////////
for (let forNumber = 1; forNumber <= 100; forNumber = forNumber + 1) {
    if (forNumber % 5 == 0) {
        console.log(`buzz`);
    } else if (forNumber % 3 == 0) {
        console.log(`fizz`);
    } else {
        console.log(forNumber);
    }
    if (forNumber % 25 == 0) break; // break out of the loop when we hit a number divisible by 25
}