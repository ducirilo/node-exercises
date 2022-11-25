`use strict`;

const {
    numberOfCountriesInTheWorld,
    countryWithMostOfficialLanguagesSpeakingALanguage,
    numberOfOfficialLanguages,
    countryWithHighestNumberOfOfficialLanguages,
    mostCommonOfficialLanguages
} = require(`./lib/official-languages`);

const countriesData = [
    {
        country:`US`,
        languages: [`en`]
    },
    {
        country:`BE`,
        languages: [`nl`,`fr`,`de`]
    },
    {
        country:`NL`,
        languages: [`nl`,`fy`]
    },
    {
        country:`DE`,
        languages: [`de`]
    },
    {
        country:`ES`,
        languages: [`es`]
    }
];

console.log(`Number of countries in the world:`, numberOfCountriesInTheWorld(countriesData));
console.log(`Country with the most official languages, where they officially speak German (de):`, countryWithMostOfficialLanguagesSpeakingALanguage(countriesData, `de`));
console.log(`Number of official languages spoken in the listed countries:`, numberOfOfficialLanguages(countriesData));
console.log(`Country with the highest number of official languages:`, countryWithHighestNumberOfOfficialLanguages(countriesData));
console.log(`The most common official language(s), of all countries:`, mostCommonOfficialLanguages(countriesData));
