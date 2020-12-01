const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`url ${lat} ${lng}`, );
    return {
        lat,
        lng
    }
}

module.exports = {
    getClima
}