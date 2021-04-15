const request= require('request')

const url= 'http://api.weatherstack.com/current?access_key=3c3097304e133aff069f676bfc1200d2&query=37.8267,-122.4233&units=f'

request({url:url,json:true},(error,response) => {
  if(error){
    console.log('Unable to connect to the server')
  }else if(response.body.error) {
    console.log('Unable to find location')
  }else{
    console.log(response.body.current.temperature)
    console.log(response.body.current.feelslike)
    console.log(response.body.current.weather_descriptions[0])
  }
})

//Geocoding
const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicnl1emFraTc3NyIsImEiOiJja25oOXlyejcyaXUzMnhsY2c3cWpmb2hoIn0.6hLY9DPui6r0FjojU6Twcg&limit=1'
request({url:url2,json:true},(error,response) => {
  if(error){
    console.log('Unable to connect to location to location services')
  }else if(response.body.features.length === 0){
    console.log('Unable to find location. Try another search.')
  }else{
    console.log(response.body.features[0].center[0],
      response.body.features[0].center[1])
  }
})
