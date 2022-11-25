`use strict`;

function numberOfCountriesInTheWorld(countriesData) {
    if (!Array.isArray(countriesData)) {
        return 0;
    }

    return countriesData.length;
}

function countryWithMostOfficialLanguagesSpeakingALanguage(countriesData, language = `de`) {
    if (!Array.isArray(countriesData)) {
        return null;
    }

    const countrySpeakingTheLanguage = countriesData.reduce((res, country) => {
        if (country.languages.includes(language)) {
            if (!res || country.languages.length > res.languages.length) {
                res = country;
            }
        }
        return res;
    });

    return countrySpeakingTheLanguage.country;
}

function numberOfOfficialLanguages(countriesData) {
    if (!Array.isArray(countriesData)) {
        return 0;
    }

    const uniqueLanguagesList = countriesData.reduce((res, country) => {
        for (const lang of country.languages) {
            // jus adds it to the result if it was not added yet
            if (!res.includes(lang)) {
                res.push(lang);
            }
        }
        return res;
    }, []);

    return uniqueLanguagesList.length;
}

function countryWithHighestNumberOfOfficialLanguages(countriesData) {
    if (!Array.isArray(countriesData)) {
        return null;
    }

    const countriesAndNumberOfOfficialLanguagesMap = countriesData.reduce((res, country) => {
        res[country.country] = country.languages.length;
        return res;
    }, {});

    // it might happen that more than one country has the same number
    // of official languages. So let's handle it as an array of countries
    // with same number of official languages for checking it
    let numberOfLanguagesAndCountriesMap = {};
    for (let country in countriesAndNumberOfOfficialLanguagesMap) {
        const languagesCounter = countriesAndNumberOfOfficialLanguagesMap[country];

        if (!numberOfLanguagesAndCountriesMap[languagesCounter]) {
            numberOfLanguagesAndCountriesMap[languagesCounter] = [];
        }

        numberOfLanguagesAndCountriesMap[languagesCounter].push(country);
    }

    const highestFrequency = Object.keys(numberOfLanguagesAndCountriesMap).sort().pop();
    const countryWithHighestOfficialLanguages = numberOfLanguagesAndCountriesMap[highestFrequency];

    if (countryWithHighestOfficialLanguages.length === 1) {
        return countryWithHighestOfficialLanguages[0];
    }

    return null;
}

function mostCommonOfficialLanguages(countriesData) {
    if (!Array.isArray(countriesData)) {
        return null;
    }

    const officialLanguagesCounter = countriesData.reduce((res, country) => {
        for (const lang of country.languages) {
            if (!res[lang]) {
                res[lang] = 0;
            }

            res[lang]++;
        }

        return res;
    }, {});

    // it might happen that more than one language has the same frequency
    // so let's handle it as an array of most common languages
    let mostCommonLanguages = {};
    for (let language in officialLanguagesCounter) {
        const languageCounter = officialLanguagesCounter[language];

        if (!mostCommonLanguages[languageCounter]) {
            mostCommonLanguages[languageCounter] = [];
        }

        mostCommonLanguages[languageCounter].push(language);
    }

    const highestFrequency = Object.keys(mostCommonLanguages).sort().pop();

    return mostCommonLanguages[highestFrequency];
}

module.exports = {
    numberOfCountriesInTheWorld,
    countryWithMostOfficialLanguagesSpeakingALanguage,
    numberOfOfficialLanguages,
    countryWithHighestNumberOfOfficialLanguages,
    mostCommonOfficialLanguages
};