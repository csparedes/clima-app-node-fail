const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccióm de la ciudad',
        demand: true
    }
}).argv;

// console.log(argv.direccion);
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    const place = await lugar.getLugarLatLng(direccion);
    if (place.body) {

        const wheter = await clima.getClima(place.lat, place.lng);
    } else {
        console.log(`No se pudo determinar el clima`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);