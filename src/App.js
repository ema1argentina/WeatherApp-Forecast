import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import ApiResult from "./components/ApiResult";

import * as Util from "./js/utils.js";

const API_KEY = "d32aae6cc8bcd97133f1b0820a86b492";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    fDay1: undefined,
    fDate1: undefined,
    fTemp1: undefined,
    fIcon1: undefined,
    fDay2: undefined,
    fDate2: undefined,
    fTemp2: undefined,
    fIcon2: undefined,
    fDay3: undefined,
    fDate3: undefined,
    fTemp3: undefined,
    fIcon3: undefined,
    fDay4: undefined,
    fDate4: undefined,
    fTemp4: undefined,
    fIcon4: undefined,
    fDay5: undefined,
    fDate5: undefined,
    fTemp5: undefined,
    fIcon5: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    /*
      Today's Weather
      https://api.openweathermap.org/data/2.5/weather?q=London&mode=json&appid=d32aae6cc8bcd97133f1b0820a86b492
      Forecast Weather
      https://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&appid=d32aae6cc8bcd97133f1b0820a86b492
    */
    e.preventDefault();
    const city = e.target.elements.city.value;
    var api_call1 = '';
    var response1 = '';
    var api_call2 = '';
    var response2 = '';

    if (city) {
      api_call1 = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      response1 = await api_call1.json();
      api_call2 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
      response2 = await api_call2.json();
    }

    if (city && response1.cod !== '404') {
      const forecastData = Util.processForecastResults(response2);
      this.setState({
        temperature: response1.main.temp,
        city: response1.name,
        country: response1.sys.country,
        humidity: response1.main.humidity,
        description: response1.weather[0].description,
        icon: Util.selectIcon(response1.weather[0].main),
        fDay1: forecastData[0].day,
        fDate1: forecastData[0].date,
        fTemp1: forecastData[0].temp,
        fIcon1: forecastData[0].icon,
        fDay2: forecastData[1].day,
        fDate2: forecastData[1].date,
        fTemp2: forecastData[1].temp,
        fIcon2: forecastData[1].icon,
        fDay3: forecastData[2].day,
        fDate3: forecastData[2].date,
        fTemp3: forecastData[2].temp,
        fIcon3: forecastData[2].icon,
        fDay4: forecastData[3].day,
        fDate4: forecastData[3].date,
        fTemp4: forecastData[3].temp,
        fIcon4: forecastData[3].icon,
        fDay5: forecastData[4].day,
        fDate5: forecastData[4].date,
        fTemp5: forecastData[4].temp,
        fIcon5: forecastData[4].icon,
        error: ""
      })
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        fDay1: undefined,
        fDate1: undefined,
        fTemp1: undefined,
        fIcon1: undefined,
        fDay2: undefined,
        fDate2: undefined,
        fTemp2: undefined,
        fIcon2: undefined,
        fDay3: undefined,
        fDate3: undefined,
        fTemp3: undefined,
        fIcon3: undefined,
        fDay4: undefined,
        fDate4: undefined,
        fTemp4: undefined,
        fIcon4: undefined,
        fDay5: undefined,
        fDate5: undefined,
        fTemp5: undefined,
        fIcon5: undefined,
        error: "Please enter a valid City and try again."
      });
    }
    console.log(response1);
    console.log(response2);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="title-container">
            <Titles />
          </div>
          <div className="form-container">
            <Form loadWeather={this.getWeather} />
          </div>
          <div className="result-container">
            <ApiResult
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              icon={this.state.icon}
              fDay1={this.state.fDay1}
              fDate1={this.state.fDate1}
              fTemp1={this.state.fTemp1}
              fIcon1={this.state.fIcon1}
              fDay2={this.state.fDay2}
              fDate2={this.state.fDate2}
              fTemp2={this.state.fTemp2}
              fIcon2={this.state.fIcon2}
              fDay3={this.state.fDay3}
              fDate3={this.state.fDate3}
              fTemp3={this.state.fTemp3}
              fIcon3={this.state.fIcon3}
              fDay4={this.state.fDay4}
              fDate4={this.state.fDate4}
              fTemp4={this.state.fTemp4}
              fIcon4={this.state.fIcon4}
              fDay5={this.state.fDay5}
              fDate5={this.state.fDate5}
              fTemp5={this.state.fTemp5}
              fIcon5={this.state.fIcon5}
              error={this.state.error} />
          </div>
        </div>
      </div >
    )
  }
}
export default App;