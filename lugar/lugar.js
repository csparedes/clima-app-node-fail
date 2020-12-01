const axios = require('axios');



const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(argv.direccion);
    console.log(encodedUrl);

    let instance = axios.create({
        baseURL: '',
        headers: ''
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`Error para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion: direccion,
        lat,
        lng
    };
}

module.exports = {
    getLugarLatLng
}