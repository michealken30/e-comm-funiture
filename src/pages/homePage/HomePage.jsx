import React from "react";
import Hero from "../../components/Hero/Hero";
import Room from "../../components/Rooms/Room";
import BestCollections from "../../components/BestCollections/BestCollections";
import { useGetFurniture } from "../../Api/furnituresApi.js";

const HomePage = () => {
  const { products, refetch } = useGetFurniture();

  return (
    <div>
      <Hero />
      <Room />
      <BestCollections
        title="BEST COLLECTIONS"
        data={products}
        refetch={refetch}
        best="Best Collections"
      />
      <BestCollections
        title="BEST SELLER"
        data={products}
        refetch={refetch}
        best="Best Seller"
      />
    </div>
  );
};

export default HomePage;
