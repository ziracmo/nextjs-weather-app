import React from "react";
import { Weather } from "../../models/weather";
import { XIcon } from "@heroicons/react/outline";
import moment from "moment";

type Props = {
  weather: Weather;
  closeClick: (weather: Weather) => void;
};

type State = {
  isDay: boolean,
  currentTime: string
};

export default class WeatherCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const sys = props.weather.sys;
    const utc = moment().utcOffset(this.props.weather.timezone / 60);
    const currentTimestamp = utc.toDate().getTime() / 1000;
    this.state = {
      isDay: currentTimestamp < sys.sunset && currentTimestamp > sys.sunrise,
      currentTime: utc.format("h:mm A")
    }

    this.handleClose = this.handleClose.bind(this);
  }

  public handleClose() {
    this.props.closeClick(this.props.weather);
  }

  render() {
    const { weather } = this.props;
    const { isDay, currentTime } = this.state;
    return (
      <div className={"shadow-lg relative w-full rounded-xl weather-card text-center mb-4 " + (isDay ? 'text-black' : 'dark text-white')}>
        <span className="absolute top-4 right-4 h-4 w-4" onClick={this.handleClose}><XIcon /></span>
        <div className="pt-8">
          <h2 className="text-5xl text-shadow pb-2">
            {weather.main.temp.toFixed(0)}°C
          </h2>
          <h3 className="text-4xl text-shadow capitalize hidden md:block">
            {weather.weather[0].description} <br />
            {currentTime}
          </h3>
        </div>
        <h4 className="absolute bottom-0 w-full text-4xl p-3 text-shadow text-white">
          {weather?.name}
        </h4>
      </div>
    );
  }
}
