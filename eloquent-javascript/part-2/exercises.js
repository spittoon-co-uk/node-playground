//////////////////////
// The hash pyramid //
//////////////////////
console.log(`Let's build a pyramid!`);
const symbol = `#`;
let whileNumber = 0, output = symbol;
do {
    console.log(output);
    output = output + symbol;
    whileNumber = whileNumber + 1;
} while (whileNumber <= 6);

///////////////
// Fizz/Buzz //
///////////////
console.log(`Now let's play Fizz/Buzz!`);
for (let forNumber = 1; forNumber <= 100; forNumber = forNumber + 1) {
    if (forNumber % 5 == 0 && forNumber % 3 == 0) {
        console.log(`FizzBuzz`);
    } else if (forNumber % 5 == 0) {
        console.log(`Buzz`);
    } else if (forNumber % 3 == 0) {
        console.log(`Fizz`);
    } else {
        console.log(forNumber);
    }
}

////////////////
// Chessboard //
////////////////
console.log(`Now let's build a chessboard!`);
let gridSize = 8;
let init = 1;
let chessboardOutput = ``;
let rowCount = init;
do {
    let columnCount = init;
    let oddEven = rowCount % 2 == 0;
    do {
        let nextCharacter = determineNextCharacter(columnCount, oddEven);
        chessboardOutput = buildChessboardRow(chessboardOutput, nextCharacter, columnCount, gridSize);
        columnCount = columnCount + 1;
    } while (columnCount <= gridSize);
    rowCount = rowCount + 1;
} while (rowCount <= gridSize);
console.log(chessboardOutput);

function buildChessboardRow(currentRow, nextCharacter, columnCount, gridSize) {
    row = currentRow + nextCharacter;
    if (columnCount % gridSize == 0) row = row + `\n`;
    return row;
}

function determineNextCharacter(columnCount, oddEven) {
    switch (columnCount % 2 == 0) {
        case false:
            nextCharacter = oddEven ? ` ` : `#`;
            break;
        case true:
            nextCharacter = oddEven ? `#` : ` `;
            break;
    }
    return nextCharacter;
}