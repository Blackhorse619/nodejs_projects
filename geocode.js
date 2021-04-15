const request = require('request');


const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoicnl1emFraTc3NyIsImEiOiJja25oOXlyejcyaXUzMnhsY2c3cWpmb2hoIn0.6hLY9DPui6r0FjojU6Twcg&limit=1'

  request({ url:url,json:true},(error, response) => {
    if(error){
      callback('Unable to connect to location services!',undefined)
    }else if(response.body.features.length === 0) {
      callback('Unable to find location. Try another search',undefined)
    }else{
      callback(undefined,{
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  })
}

geocode('burdwan',(error,data) => {
  console.log('Error:',error)
  console.log('Data:',data)
})
