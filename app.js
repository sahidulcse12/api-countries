

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        displayCountries(data);
    })

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        //const element = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countriesInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name}')">Details</button>
            `
        countryDiv.innerHTML = countriesInfo;
        countriesDiv.appendChild(countryDiv);

    });

// for (let i = 0; i < countries.length; i++) {
    // const element = countries[i];
    // const countryDiv = document.createElement('div');
    // countryDiv.className = 'country';

    // // const h3 = document.createElement('h3');
    // // h3.innerText = element.name;
    // // const p = document.createElement('p');
    // // p.innerText = element.capital;
    // // countryDiv.appendChild(h3);
    // // countryDiv.appendChild(p);

    // const countriesInfo = `

    // <h3 class="country-name">${element.name}</h3>
    //         <p>${element.capital}</p>

    // countryDiv.innerHTML = countriesInfo;
    // countriesDiv.appendChild(countryDiv);



}


const displayCountryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country =>{
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h1>Name: ${country.name}</h1>
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area}</p>
    <img src="${country.flag}">
    `
}



    