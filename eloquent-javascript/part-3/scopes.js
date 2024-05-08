let x =10;
if (true) {
    let y = 20;
    var z = 30;
    const a = 40;
    console.log(x + y + z);
}
// a and y cannot be accessed here as "let" and "const" have a local scope (i.e. they are contained within the block where they were declared)
console.log(x + z);
// console.log(a); // ReferenceError: a is not defined
// console.log(y); // ReferenceError: y is not defined