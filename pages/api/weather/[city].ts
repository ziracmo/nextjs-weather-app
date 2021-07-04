import type { NextApiRequest, NextApiResponse } from "next";

import { Weather } from "models/weather";
import axios from "axios";

const config = {
  url: "https://api.openweathermap.org/data/2.5/",
  apiKey: "727f57ea7af4d6a451cfc8a048734164",
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Weather>) => {
  const method = req.method;
  const query = req.query;
  console.log(query)
  if (method === "GET") {
    if(!query.city) {
      return res.status(400);
    }
    const weather = await axios.get(
      `${config.url}weather?q=${query.city}&appid=${config.apiKey}&units=metric`
    );
    res.status(200).json(weather.data as Weather);
  }
};

export default handler;
