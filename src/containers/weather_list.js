import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMaps from '../components/google_map'


class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name
    // if you use weather=>{weather.main.temp} you get undefined. You need to return the function in the braces
    const temps = cityData.list.map(weather=>weather.main.temp);
    const pressure = cityData.list.map(weather=>weather.main.pressure)
    const humidity = cityData.list.map(weather=>weather.main.humidity)
    const {lon, lat} = cityData.city.coord;



    console.log(temps);
    return(
      <tr key={name}>
        <td><GoogleMaps lon={lon} lat={lat}/></td>
        <td><Chart color="red" data={temps} units="K"/></td>
        <td><Chart color="blue" data={pressure} units="hPa"/></td>
        <td><Chart color="green" data={humidity} units="%"/></td>
      </tr>
    );
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }){
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)