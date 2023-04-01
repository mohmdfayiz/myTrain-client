import Arrow from "../assets/next.png";
import { getStations, searchTrain } from "../api";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResult } from "../redux/slices/trainSlice";

const Search = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!source || !destination || source === destination) return;
    searchTrain(source, destination).then((result) => {
      dispatch(setSearchResult(result.data));
    }).catch(()=>{
      alert('Not found any trains available in this root')
    })
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="mt-10 flex sm:flex-row flex-col sm:gap-10">
        <DropdownList setState={setSource} placeholder={"Source"} />
        <img src={Arrow} alt="To" className="h-10 w-10 object-cover sm:block hidden" />
        <DropdownList setState={setDestination} placeholder={"Destination"} />
        <button
          type="submit"
          className="p-2 w-28 text-white rounded-sm bg-indigo"
        >
          Search
        </button>
      </div>
    </form>
  );
};

const DropdownList = ({ setState, placeholder }) => {
  const { result, isLoading, error } = useFetch(getStations, "stations");
  return (
    <select
      className="rounded-sm"
      name={placeholder}
      onChange={(e) => setState(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {result?.data?.stations.map((station) => (
        <option key={station} value={station}>
          {station}
        </option>
      ))}
    </select>
  );
};

export default Search;
