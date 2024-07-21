import React from "react";
import Hero from "../../components/Hero/Hero";
import Room from "../../components/Rooms/Room";
import BestCollections from "../../components/BestCollections/BestCollections";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Room />
      <BestCollections title="BEST COLLECTIONS" />
      <BestCollections title="BEST SELLER" />
    </div>
  );
};

export default HomePage;
