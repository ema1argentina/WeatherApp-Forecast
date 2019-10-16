export function processForecastResults(response) {
    var list = response.list;
    var output = [];
    for (var i = 0; i < list.length; i++) {
        var obj = list[i];
        var auxDate = new Date(obj.dt_txt);
        var dt_txt = auxDate.toLocaleDateString("en-US");
        var options = { weekday: "long" };
        var day = auxDate.toLocaleDateString("en-US", options);
        var today = new Date();
        today = today.toLocaleDateString("en-US", options);
        var json = {};

        if (output.length > 0 && day !== output[output.length - 1].day) {
            json =
                {
                    "date": dt_txt,
                    "day": day,
                    "temp": obj.main.temp,
                    "weather": obj.weather[0].main,
                    "weatherDesc": obj.weather[0].description,
                    "icon": selectIcon(obj.weather[0].main)
                }
            output.push(json);
        }
        else if (output.length === 0 && day !== today) {
            json =
                {
                    "date": dt_txt,
                    "day": day,
                    "temp": obj.main.temp,
                    "weather": obj.weather[0].main,
                    "weatherDesc": obj.weather[0].description,
                    "icon": selectIcon(obj.weather[0].main)
                }
            output.push(json);
        }
    }
    return output;
}

export function selectIcon(weather) {
    var icon = "";
    switch (weather) {
        case "Clouds":
            icon = "cloudy";
            break;
        case "Rain":
            icon = "rain";
            break;
        case "Snow":
            icon = "snow";
            break;
        default:
            icon = "sun";
            break;
    }
    return icon;
}