import CustomParticles from "../atoms/particles";
import React from "react";
import SearchBar from "../molecules/searchbar";
import Wave from "../atoms/wave";
import { Weather } from "models/weather";
import WeatherCard from "../molecules/weather-card";
import { getWeatherFromCity } from "services/weather";

type Props = {};

type State = {
  weather?: Weather;
};
export default class HomeSection extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.search = this.search.bind(this);
  }

  async search(value: string) {
    const res = await getWeatherFromCity(value);
    this.setState({ weather: res });
  }

  render() {
    const { weather } = this.state;

    return (
      <section className="h-screen from-red-600 to-red-800 bg-gradient-to-r relative">
        <CustomParticles />
        <div className="top-24 absolute h-5/6 w-full">
          <div className="w-full mx-auto">
            <SearchBar searchQuery="Toulouse" setSearchQuery={this.search} />
          </div>
          {weather ? (
            <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 px-6 md:px-8 h-full pb-40">
              <WeatherCard weather={weather} />
            </div>
          ): null}
        </div>
        <div className="absolute bottom-0 w-screen">
          <Wave color="white" classes="h-12 w-screen" />
        </div>
      </section>
    );
  }
}
