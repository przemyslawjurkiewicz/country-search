"use strict";
const url = 'https://restcountries.eu/rest/v2/name/';
let countriesList = document.getElementById('countries');

const searchCountries = () => {
    let countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then((resp) => {
            return resp.json();
        })
        .then(showCountriesList);
}

const showCountriesList = (resp) => {
    countriesList.innerHTML = '';
    let template = document.getElementById('country-temple').innerHTML;
    Mustache.parse(template);
    for (let i = 0; i < resp.length; i++) {
        countriesList.innerHTML += Mustache.render(template, resp[i]);
    }
}
document.getElementById('search').addEventListener('click', searchCountries);