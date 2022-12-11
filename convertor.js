const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { Headers } = fetch;

const fromKilogramToPound = (kg) => {
    return kg * 2.20462;
}
const fromPoundToKilogram = (pound) => {
    return pound / (2.20462);
}
const fromMileToKilometer = (mile) => {
    return mile * 1.60934 ;
}
const fromKilometerToMile = (kilometer) => {
    return kilometer / (1.60934) ;
}
const fromInchToCentimetre = (inch)=>{
    return (inch * 2.5) ;
}
const fromCentimetreToInch = (centimetre)=>{
    return (centimetre / 2.5) ;
}
const fromGallonToLitter = (gallon)=>{
    return (gallon  * 4.6)
}
const fromLitterToGalon = (litter) =>{
    return (litter / 4.6) ;
}
const fromFootToMeter  = (foot) =>{
    return (foot * 0.5) ;
}
const fromMeterToFoot = (meter) =>{
    return (meter / 0.5) ;
}
const fromCelsiusToFahrenheit  = (celsius) =>{
    return (celsius * 1.8) + 32
}
const fromFahrenheitToCelsius  = (fahrenheit) =>{
    return (fahrenheit - 32) * ( 5/9)
}
module.exports = { 
    fromKilogramToPound , 
    fromPoundToKilogram ,
    fromMileToKilometer ,
    fromKilometerToMile ,
    fromCelsiusToFahrenheit ,
    fromFahrenheitToCelsius ,
    fromInchToCentimetre,
    fromCentimetreToInch,
    fromGallonToLitter,
    fromLitterToGalon,
    fromFootToMeter,
    fromMeterToFoot
}