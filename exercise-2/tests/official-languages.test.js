`use strict`;

const test = require(`ava`);
const {
    numberOfCountriesInTheWorld,
    countryWithMostOfficialLanguagesSpeakingALanguage,
    numberOfOfficialLanguages,
    countryWithHighestNumberOfOfficialLanguages,
    mostCommonOfficialLanguages
} = require(`../lib/official-languages`);

const testCountriesData = [
    {
        country:`BR`,
        languages: [`pt`]
    },
    {
        country:`PT`,
        languages: [`pt`]
    },
    {
        country:`IS`,
        languages: [`is`, `en`, `pt`]
    },
    {
        country:`FR`,
        languages: [`fr`, `de`]
    },
    {
        country:`IN`,
        languages: [`hi`, `en`]
    },
    {
        country:`NZ`,
        languages: [`nz`, `en`, `ma`, `de`]
    },
    {
        country:`SG`,
        languages: [`en`, `ml`, `md`, `ta`, `pt`]
    }
];

test(`should return the number of countries in the world`, t => {
    const expected = 7;

    const actual = numberOfCountriesInTheWorld(testCountriesData);

    t.is(actual, expected);
});

test(`should return 0 if parameter is malformed when counting the number of countries in the world`, t => {
    const expected = 0;

    const actual = numberOfCountriesInTheWorld(`abc`);

    t.is(actual, expected);
});

test(`should return the country with the most official languages, where they officially speak German (de)`, t => {
    const expected = `NZ`;

    const actual = countryWithMostOfficialLanguagesSpeakingALanguage(testCountriesData);

    t.is(actual, expected);
});

test(`should return null if parameter is malformed when finding the country with the most official languages, where they officially speak German (de)`, t => {
    const expected = null;

    const actual = countryWithMostOfficialLanguagesSpeakingALanguage(`abc`);

    t.is(actual, expected);
});

test(`should return the number of official languages spoken in the listed countries`, t => {
    const expected = 11;

    const actual = numberOfOfficialLanguages(testCountriesData);

    t.is(actual, expected);
});

test(`should return zero if parameter is malformed when counting the number of official languages spoken in the listed countries`, t => {
    const expected = 0;

    const actual = numberOfOfficialLanguages(`abc`);

    t.is(actual, expected);
});

test(`should return the country with the highest number of official languages`, t => {
    const expected = `SG`;

    const actual = countryWithHighestNumberOfOfficialLanguages(testCountriesData);

    t.is(actual, expected);
});

test(`should return null if parameter is malformed when finding the country with the highest number of official languages`, t => {
    const expected = null;

    const actual = countryWithHighestNumberOfOfficialLanguages(`abc`);

    t.is(actual, expected);
});

test(`should return null if no country has a highest number of official languages`, t => {
    const localTestData = [
        {
            country:`BR`,
            languages: [`pt`]
        },
        {
            country:`PT`,
            languages: [`pt`]
        }
    ];

    const expected = null;

    const actual = countryWithHighestNumberOfOfficialLanguages(localTestData);

    t.is(actual, expected);
});

test(`should return the most common official language(s), of all countries`, t => {
    const expected = [`pt`, `en`];

    const actual = mostCommonOfficialLanguages(testCountriesData);

    t.deepEqual(actual.sort(), expected.sort());
});

test(`should return null if parameter is malformed when finding the most common official language(s), of all countries`, t => {
    const expected = null;

    const actual = mostCommonOfficialLanguages(`abc`);

    t.is(actual, expected);
});