function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// multiplier is called and creates an environment in which its factor parameter is bound to 2.
// The function value it returns, which is stored in twice, remembers this environment.
// So when that is called, it multiplies its argument by 2.

let thrice = multiplier(3);
console.log(thrice(5));
console.log(twice(4));
// We can then do the same for thrice, but twice is also still available to us