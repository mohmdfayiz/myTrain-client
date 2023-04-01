import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getPopular } from "../api";
import { useDispatch, useSelector } from "react-redux";
import Arrow from "../assets/next.png";
import { setShow, setData } from "../redux/slices/modal";

const List = () => {
  const { result, isLoading, error } = useFetch(getPopular, "Popular");
  const { searchResult } = useSelector((state) => state.trains);
  console.log(searchResult);
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

const ListItem = ({ item }) => {

  const dispatch = useDispatch();
  const handleSelect = (train) => {
    dispatch(setData(train));
    dispatch(setShow());
  };

  return (
    <div
      onClick={() => handleSelect(item)}
      className="bg-white p-2 rounded-md hover:shadow-md cursor-pointer"
    >
      <div className="grid grid-cols-12 ">
        <h2 className="text-md font-bold col-span-3">
          {item.name}
        </h2>
        <div className="flex align-middle gap-3 col-span-5">
          <h3>{item.route[0].stationName}</h3>
          <img src={Arrow} alt="To" className="h-5 w-5" />
          <h3>{item.route[3].stationName}</h3>
        </div>
        <h3 className="text-md col-span-2">
          {item.route.reduce((acc, cur) => acc + cur.distanceFromPrevious, 0)}{" "}
          KM
        </h3>
        <h3 className="text-md col-span-2">
          ₹
          {item.route.reduce((acc, cur) => acc + cur.distanceFromPrevious, 0) *
            1.25}
        </h3>
      </div>
    </div>
  );
};

export default List;
