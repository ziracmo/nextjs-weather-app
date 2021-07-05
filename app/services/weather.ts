import { Weather } from "models/weather";
import axios from "axios";

export async function getWeatherFromCity(city: string): Promise<Weather> {
  return await axios.get('/api/weather/' + city).then(res => res.data);
}
