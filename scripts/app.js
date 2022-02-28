const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const updateUI = (data) =>{
    const {cityDets, weather} = data;


    // update details template 
    details.innerHTML=`
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `;

    if (card.classList.contains('d-none')){
        card.classList.remove('d-none')
    };
};




const updatecity = async (city) =>{
    const cityDets = await getcity(city);
    const weather = await getweather(cityDets.Key);
    
    return{
        cityDets, weather
    };
};

cityForm.addEventListener('submit', e =>{
    e.preventDefault();

    const city =cityForm.city.value.trim();
    cityForm.reset();

    updatecity(city)
        .then(data => updateUI(data))
        .catch(err => updateUI(err));
});