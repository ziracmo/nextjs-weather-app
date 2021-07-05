export type Weather = {
  coord: WeatherCoordinates;
  weather: WeatherData[];
  base: string;
  main: WeatherMain;
  visibility: number;
  wind: WeatherWind;
  clouds: WeatherClouds;
  dt: number;
  sys: WeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type WeatherCoordinates = {
  lon: number;
  lat: number;
};

export type WeatherData = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherMain = {
  temp: 295.09;
  feels_like: 294.72;
  temp_min: 293.78;
  temp_max: 298.63;
  pressure: 1018;
  humidity: 53;
};

export type WeatherWind = {
  speed: number;
  deg: number;
};

export type WeatherClouds = {
  all: number;
};
export type WeatherSys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};
