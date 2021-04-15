const request = require('request')

const forecast = (latitude,longitude,callback) => {
  const url= 'http://api.weatherstack.com/current?access_key=3c3097304e133aff069f676bfc1200d2&query='+latitude+','+longitude+'&units=f'

  request({url:url,json:true},(error,response) => {
    if(error){
        callback('Unable to connect to the server',undefined)
      }else if(response.body.error) {
        console.log('Unable to find location',undefined)
      }else{
        callback(undefined,response.body.current.temperature)
        callback(undefined,response.body.current.feelslike)
        callback(undefined,response.body.current.weather_descriptions[0])
      }
  })
}

module.exports = forecast
