// citiesSelect.addEventListener('change', function(e) {
//   div.innerText = e.target.value;
// });
const countriesSelect = document.querySelector('#countries');
const citiesSelect = document.querySelector('#cities');
const displayText = document.querySelector('p');

const data = {
  russia: ['Moscow', 'Saint-Petersburg', 'Voronezh'],
  us: ['Los-Angeles', 'New-York', 'Houston'],
  uar: ['Capetown', 'Yohannesburg', 'Durban']
};

let chooseCountry = e => {
  citiesSelect.options.length = 0;
  const cities = data[event.target.value];
  for (let i = 0; i < cities.length; i++) {
    const cityOpt = document.createElement('Option');
    citiesSelect.appendChild(cityOpt);
    cityOpt.innerText = cities[i];
  }
};

countriesSelect.addEventListener('change', chooseCountry);
