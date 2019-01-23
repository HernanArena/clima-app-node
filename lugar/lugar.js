const axios = require('axios');

const getLugarLatLng = async(direccion) => {
  let encodedUrl = encodeURI(direccion);

  let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyC5GfJMhVr48k6nGUXZ5JADkD8FukjgHgk`)
  if ( response.data.status === 'ZERO_RESULTS'){
    throw new Errror(`No hay resultados para la ciudad${direccion}`);
  }
    let location = response.data.results[0];
    let coordenadas = location.geometry.location

  return {
    direccion: location.formatted_address,
    lat: coordenadas.lat,
    lng: coordenadas.lng
  }
}

module.exports = { getLugarLatLng };
