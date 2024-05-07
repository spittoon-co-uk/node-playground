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
    let oddEven = true;
    switch (rowCount % 2 == 0) {
        case true:
            do {
                let nextCharacter = ``;
                switch (columnCount % 2 == 0) {
                    case false:
                        nextCharacter = ` `;
                        break;
                    case true:
                        nextCharacter = `#`;
                        break;
                }
                chessboardOutput = chessboardOutput + nextCharacter;
                if (columnCount % gridSize == 0) chessboardOutput = chessboardOutput + `\n`;
                columnCount = columnCount + 1;
            } while (columnCount <= gridSize);
            break;
        case false:
            do {
                let nextCharacter = ``;
                switch (columnCount % 2 !== 0) {
                    case false:
                        nextCharacter = ` `;
                        break;
                    case true:
                        nextCharacter = `#`;
                        break;
                }
                chessboardOutput = chessboardOutput + nextCharacter;
                if (columnCount % gridSize == 0) chessboardOutput = chessboardOutput + `\n`;
                columnCount = columnCount + 1;
            } while (columnCount <= gridSize);
            break;
    }
    rowCount = rowCount + 1;
} while (rowCount <= gridSize);
console.log(chessboardOutput);
