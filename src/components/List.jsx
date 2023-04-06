import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getPopular } from "../api";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const List = () => {
  const { result, isLoading, error } = useFetch(getPopular, "Popular");
  const { searchResult } = useSelector((state) => state.trains);

  const [list, setList] = useState([]);

  useEffect(() => {
    let isArray = Array.isArray(searchResult);
    setList(
      isArray && searchResult.length ? searchResult : result?.data?.popular
    );
  }, [searchResult, result]);

  return (
    <div className=" flex flex-col gap-2 bg-darkBlue p-5 my-[3rem] min-h-[250px] md:w-8/12 rounded-md">
      <h1 className="font-bold text-xl text-indigo">
        {searchResult.length ? "Available Trains" : "Popular"}
      </h1>
      {list && list.map((item) => <ListItem key={item._id} item={item} />)}
    </div>
  );
};

export default List;