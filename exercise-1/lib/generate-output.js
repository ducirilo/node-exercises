`use strict`;

function generateOutput (fromNumber, toNumber) {
    const output = [];

    // immediately return empty output when parameters are malformed
    if (fromNumber > toNumber
        || !Number.isInteger(fromNumber)
        || !Number.isInteger(toNumber)) {
        return output;
    }

    for (let i = fromNumber; i <= toNumber; i++) {
        const isDivisibleBy3 = i % 3 === 0;
        const isDivisibleBy5 = i % 5 === 0;

        if (isDivisibleBy3 && isDivisibleBy5) {
            output.push(`Visual Nuts`);
        } else if (isDivisibleBy3) {
            output.push(`Visual`)
        } else if (isDivisibleBy5) {
            output.push(`Nuts`);
        } else {
            output.push(i);
        }
    }

    return output;
};

module.exports = {
    generateOutput
};