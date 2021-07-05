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
  if (method === "GET") {
    if(!query.city) {
      return res.status(400);
    }
    try {
      const weather = await axios.get(
        `${config.url}weather?q=${query.city}&appid=${config.apiKey}&units=metric`
      );
      return res.status(200).json(weather.data as Weather);
    } catch(e){
      return res.status(404).send(e);
    }

  }
};

export default handler;
