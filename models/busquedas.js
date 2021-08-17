const axios = require("axios");

class Busquedas{
    historial = ["Madrid", "Bogota", "Torreón"];
    constructor(){
    }
    async ciudad(lugar=""){
        const instance = axios.default.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params:{
                'access_token': 'pk.eyJ1IjoiZWF2aWxhMzciLCJhIjoiY2tzZ2xjM3Y2MWxtaTJwcXRzOGlwc2w2dSJ9.J1AuX4rv7XFS05vAYXO-hw',
                'limit':5,
                'language':'es'
            }
        })
        try {
            const response = await instance.get();
            console.log(response.data)            
        } catch (error) {
            console.log(error)
        }
        return [];
    }
}

module.exports = Busquedas