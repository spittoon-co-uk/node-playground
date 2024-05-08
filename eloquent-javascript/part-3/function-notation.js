const square1 = function(x) {
    return x * x;
}

function square2(x) {
    return x * x;
}

const square3 = (x = 6) => {
    return x * x;
}; // Note the semi-colon which wasn't needed for the previous two declarations

const square4 = x => x * x; // We don't need parentheses around the parameter list if there is only one. We don't need braces around the body either if it's a single expression and not a block of logic.

//All of these will return the same result:
console.log(square1(6));
console.log(square2(6));
console.log(square3()); // We've not passed an argument, but the function has a default so it's ok
console.log(square4(6));