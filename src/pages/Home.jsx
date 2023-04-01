import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Title from "../components/Title";
import List from "../components/List";
import TrainDetails from "../components/Modal";

const Home = () => {
  return (
    <>
      <Header />
      <Title />
      <Search />
      <List />
      <TrainDetails />
    </>
  );
};

export default Home;
