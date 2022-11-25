`use strict`;

const { generateOutput } = require(`./lib/generate-output`);

function printIntegers (fromNumber, toNumber) {
    const output = generateOutput(fromNumber, toNumber);
    console.log(output.join(`\n`));
}

printIntegers(1, 100);