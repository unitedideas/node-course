
    const temp = response.body.currently.temperature
    const chanceOfRain = response.body.currently.precipProbability
    console.log(`It is currently ${temp} degrees out. There is a ${chanceOfRain}% chance of rain.`)
}