const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    //Complete with your code
    const Search=countries.filter(countries =>countries.iso3==isoCode);
    Search.forEach(element => console.log(element));

}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    //Complete with your code
    const Search=countries.filter(countries =>countries.iso3==isoCode);
    for (var name in Search[0].translations){
     if(name==language){
                    console.log("Pais Seleccionado  "+Search[0].translations[name] +" en idioma " +language);} 
                    }
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    //Complete with your code
    let CountriesSubregion = []
    countries.forEach(country =>{
        if (country.subregion == subregion){
            CountriesSubregion.push(country.name)
        }
     } )
     console.log(CountriesSubregion)
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();