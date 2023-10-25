fetch("https://weather.tsukumijima.net/api/forecast/city/040010")
  .then((response) => response.json())
  .then((data) => {
    let weather = data["forecasts"][0]["detail"]["weather"]
    let max_temp = data["forecasts"][0]["temperature"]["max"]["celsius"]
    let min_temp = data["forecasts"][0]["temperature"]["min"]["celsius"]
    let weather_forecast = '今日の仙台市の天気は'+weather
    if(max_temp){
        weather_forecast += '、最高気温は'+max_temp+'度'
    }if(min_temp){
        weather_forecast += '、最低気温は'+min_temp+'度'
    }
    weather_forecast += 'です。'
    
    window.alert(weather_forecast)
});
