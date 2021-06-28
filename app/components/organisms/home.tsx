import CustomParticles from "../atoms/particles";
import React from "react";
import Wave from "../atoms/wave";
import axios from "axios";

export default class HomeSection extends React.Component {
  async componentDidMount() {
    const res = await axios.get(
      "https://opensky-network.org/api/states/all?time=1458564121&icao24=3c6444"
    );
    console.log(res);
  }

  render() {
    return (
      <section className="h-screen from-red-600 to-red-800 bg-gradient-to-r relative">
        <CustomParticles />
        <div className="top-32 absolute h-4/6 w-full">
            <div className="w-3/4 h-full bg-white shadow-lg rounded-2xl mx-auto"></div>
        </div>
        <div className="absolute bottom-0 w-screen">
          <Wave color="white" classes="h-12 w-screen" />
        </div>
      </section>
    );
  }
}
