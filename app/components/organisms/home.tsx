import CustomParticles from "../atoms/particles";
import React from "react";
import SearchBar from "../molecules/searchbar";
import Wave from "../atoms/wave";
import { Weather } from "models/weather";
import WeatherCard from "../molecules/weather-card";
import { getWeatherFromCity } from "services/weather";
import { showToast } from "services/toast";

type Props = {};

type State = {
  weathers: Weather[];
};
export default class HomeSection extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      weathers: [],
    };
    this.search = this.search.bind(this);
  }

  async search(value: string) {
    // Check if city is already existing before doing an API call
    const ngArray: Weather[] = this.state.weathers;
    const filteredArray = ngArray.filter(v => v.name.toUpperCase() === value.toUpperCase());
    if(!filteredArray.length) {
      try {
        const res = await getWeatherFromCity(value)
        ngArray.push(res);
        this.setState({ weathers: ngArray });
      } catch(e) {
        showToast('City not found', 'error')
      }
    }
  }

  render() {
    const { weathers } = this.state;

    return (
      <section className="h-screen from-red-600 to-red-800 bg-gradient-to-r relative">
        <CustomParticles />
        <div className="top-24 absolute h-5/6 w-full">
          <div className="w-full mx-auto">
            <SearchBar searchQuery="Toulouse" setSearchQuery={this.search} />
          </div>
          {weathers.length ? (
            <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 px-6 md:px-8 h-full pb-40">
              {weathers.map((w, i) => {
                return <WeatherCard key={i} weather={w} />;
              })}
            </div>
          ) : null}
        </div>
        <div className="absolute bottom-0 w-screen">
          <Wave color="white" classes="h-12 w-screen" />
        </div>
      </section>
    );
  }
}
