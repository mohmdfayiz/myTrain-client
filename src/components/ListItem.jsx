import { useDispatch, useSelector } from "react-redux";
import Arrow from "../assets/next.png";
import { setShow, setData } from "../redux/slices/modal";

const ListItem = ({ item }) => {
  const { search } = useSelector((state) => state.trains);
  const dispatch = useDispatch();
  const handleSelect = (train) => {
    dispatch(setData(train));
    dispatch(setShow());
  };

  const calculateDistance = (routes) => {
    const sourceIndex = routes.findIndex(
      (route) =>
        route.stationName ===
        (search.source ? search.source : routes[0].stationName)
    );
    const destinationIndex = routes.findIndex(
      (route) =>
        route.stationName ===
        (search.destination
          ? search.destination
          : routes[routes.length - 1].stationName)
    );
    const distance = routes
      .slice(sourceIndex + 1, destinationIndex + 1)
      .reduce((acc, cur) => acc + cur.distanceFromPrevious, 0);
    return distance;
  };

  return (
    <div
      onClick={() => handleSelect(item)}
      className="bg-white p-2 rounded-md hover:shadow-md cursor-pointer"
    >
      <div className="grid grid-cols-12 ">
        <h2 className="text-gray-600 font-bold col-span-12 sm:col-span-3">
          {item.name}
        </h2>
        <div className="flex items-center gap-3 col-span-8 sm:col-span-5 text-sm sm:text-base">
          <p>{search?.source || item.route[0].stationName}</p>
          <img src={Arrow} alt="To" className="h-5 w-5" />
          <p>
            {search?.destination ||
              item.route[item.route.length - 1].stationName}
          </p>
        </div>
        <p className="my-auto col-span-2 text-sm sm:text-base">
          {calculateDistance(item.route)+ "  Kms"}
        </p>
        <p className="my-auto col-span-2  text-sm sm:text-base">
          {`₹ ${calculateDistance(item.route) * 1.25}`}
        </p>
      </div>
    </div>
  );
};

export default ListItem;
