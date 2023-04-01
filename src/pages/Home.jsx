import React from "react";
import Search from "../components/Search";
import Title from "../components/Title";
import List from "../components/List";
import TrainDetails from "../components/Modal";

const Home = () => {
  return (
    <div className="mx-auto container max-w-7xl px-[2rem]">
      <Title />
      <Search />
      <List />
      <TrainDetails />
    </div>
  );
};

export default Home;
