import React from "react";

//import componants

import Banner from "../components/Banner";
import HouseLIst from "../components/HouseList";
const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseLIst />
    </div>
  );
};

export default Home;
