import React from "react";
import { Weather } from "models/weather";

type Props = {
  weather?: Weather;
};

export default class WeatherCard extends React.Component<Props> {

  constructor(props: any) {
    super(props);
  } 

  render() {
    const weather = this.props.weather;
    return (
      <div className="shadow-lg relative w-full bg-white rounded-xl weather-card text-center text-black">
        <div className="pt-8">
          <h2 className="text-5xl text-shadow pb-2">{weather?.main.temp.toFixed(0)}°C</h2>
          <h3 className="text-4xl text-shadow capitalize">{weather?.weather[0].description}</h3>
        </div>
        <h4 className="absolute bottom-0 w-full text-4xl p-3 text-shadow text-white">
          {weather?.name}
        </h4>
      </div>
    );
  }
}
