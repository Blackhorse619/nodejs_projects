const geocode =require('./utils/geocode')
const forecast =require('./utils/forecast')

const address = process.argv[2]

if(!address){
  console.log("Please provide an address")
}else{
  geocode('lahore',(error,data) => {
    if(error){
      return console.log(error)
    }
    forecast(74.360106,31.497754,(error,forecastedData) => {
      if(error){
        return console.log(error)
      }
      console.log(data.location)
      console.log(forecastedData)
    })
  })

}
