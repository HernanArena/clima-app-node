const axios = require('axios');

const getClima = async(lat,lng)=>{

  let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)
  if( response.data.status === 'ZERO_RESULTS'){
    throw new Errror(`No hay resultados para la lat: ${lat} y long: ${lng}`);
  }
  let temperatura = response.data.main;
 console
  return {
    temp: temperatura.temp
  }
}

module.exports = { getClima };
