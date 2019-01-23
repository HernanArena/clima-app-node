const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').option({
  direccion:{
    alias:'d',
    desc: 'dirección de la ciudad para obtener el clima',
    demand:true
  }
}).argv;
let getInfo = async(direccion)=>{
  try {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat,coors.lng);

    return `El clima en ${coors.direccion} es de ${temp.temp} ºC`
  }
  catch(e){
    return `No se pudo determinar el clima en ${direccion}`;
  }
}
getInfo(argv.direccion)
    .then( response => console.log(response))
    .catch( e => console.log(e));


// lugar.getLugarLatLng(argv.direccion)
//   .then( response =>{
//     console.log(response);
//   })
//   .catch( e => console.log(e));
//
//
//
// clima.getClima(-34.6036844,-58.3815591)
//     .then( response => console.log(response))
//     .catch( e => console.log(e));
