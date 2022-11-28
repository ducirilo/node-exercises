`use strict`;

const test = require(`ava`);
const { generateOutput } = require(`../lib/generate-output`);

test(`should produce the expected result for numbers from 1 to 15`, t => {
    const expected = [
        1,
        2,
        `Visual`, // 3
        4,
        `Nuts`, // 5
        `Visual`, // 6
        7,
        8,
        `Visual`, // 9
        `Nuts`, // 10
        11,
        `Visual`, // 12
        13,
        14,
        `Visual Nuts` // 15
    ];

    const actual = generateOutput(1, 15);

    t.deepEqual(actual, expected);
});

test(`should return empty output when toNumber is less than from number`, t => {
    const expected = [];

    const actual = generateOutput(15, 1);

    t.deepEqual(actual, expected);
});

test(`should return empty output when parameters are malformed`, t => {
    const expected = [];

    const actual = generateOutput(`a`);

    t.deepEqual(actual, expected);
});