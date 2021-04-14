const request= require('request')

const url= 'http://api.weatherstack.com/current?access_key=3c3097304e133aff069f676bfc1200d2&query=37.8267,-122.4233'

request({url:url,json:true},(error,response) => {
  console.log(response.body.current.temperature)
  console.log(response.body.current.feelslike)
})
