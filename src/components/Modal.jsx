import React from "react";
import { Modal } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../redux/slices/modal";
import dateFormat from "dateformat";

const TrainDetails = () => {
  const dispatch = useDispatch();
  const { show, data } = useSelector((state) => state.modal);

  const closeModal = () => {
    dispatch(setShow());
  };

  return (
    <React.Fragment>
      <Modal show={show} onClose={closeModal}>
        <Modal.Header>
          <h4 className="text-indigo font-bold">{data.name}</h4>
        </Modal.Header>
        <Modal.Body>
          <div className="divide-y max-h-96 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch divide-gray-100 dark:divide-gray-700">
            {
              <table className="min-w-full text-sm">
                <thead className="bg-zinc-100 border-b">
                  <th className="px-6 py-4 text-left">Staion Name</th>
                  <th className="px-6 py-4 text-left">
                    Distance from previous station
                  </th>
                  <th className="px-6 py-4 text-left">Depature Timing</th>
                </thead>
                <tbody>
                  {show &&
                    data.route.map((route) => (
                      <tr key={route.stationNumber} className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4">{route.stationName}</td>
                        <td  className="text-center">{route.distanceFromPrevious}</td>
                        <td  className="text-center">{dateFormat(route.departureTime, "HH:MM TT")}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            }
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default TrainDetails;
