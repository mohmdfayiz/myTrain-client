import React from "react";
import { Modal } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../redux/slices/modal";
import dateFormat from "dateformat";

const TrainDetails = () => {
  const dispatch = useDispatch();
  const { show, data } = useSelector((state) => state.modal);

  console.log(data);

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
              <table>
                <th>Staion Name</th>
                <th>Distance from previous station </th>
                <th>Depature Timing</th>
                { show && data.route.map((route) => (
                  <tbody>
                    <td>{route.stationName}</td>
                    <td>{route.distanceFromPrevious}</td>
                    <td>{dateFormat(route.departureTime, 'longTime')}</td>
                  </tbody>
                ))}
              </table>
            }
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default TrainDetails;
