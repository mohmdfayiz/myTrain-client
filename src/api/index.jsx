import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "https://gray-turtle-tux.cyclic.app/";

export const getPopular = () => axios.get("/api/getPopular");
export const getStations = () => axios.get("/api/getStations");
export const searchTrain = (source, destination) =>
  axios.get(`/api/searchTrain?source=${source}&destination=${destination}`);
