const kelvin = prompt('Enter Kelvin');
const celsius = kelvin - 273;
const farenheit = Math.floor(celsius * (9/5) + 32) ;
console.log(`The temperature is ${farenheit} degrees in Farenheit`)

