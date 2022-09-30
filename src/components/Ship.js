import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import imageShip from "../images/ship.jpg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Ship({ ships }) {
  let { shipId } = useParams();
  const [selectedShip, setSelectedShip] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (ships.length > 0 && shipId) {
      setSelectedShip(ships[shipId]);
    }
  }, [ships]);

  return (
    <div className="text-white font-bold text-lg  grid h-screen place-items-center">
      <div className=" bg-white rounded-lg border border-gray-200 shadow-md ">
        <button
          className="text-black text-3xl ml-1 mt-1"
          onClick={() => navigate(-1)}
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <h5 className="text-center mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {selectedShip?.name}
        </h5>
        <div className="flex flex-col justify-center items-center">
          <img className=" rounded-lg  " src={imageShip} alt="" />
        </div>

        <div className="p-4 ">
          <p className="mb-2 font-normal text-gray-700">
            <span className="font-bold">Model : </span> {selectedShip?.model}
          </p>

          <p className="mb-2 font-normal text-gray-700">
            <span className="font-bold">Hyperdrive Rating : </span>
            {selectedShip?.hyperdrive_rating}
          </p>
          <p className="mb-2 font-normal text-gray-700">
            <span className="font-bold"> Passengers: </span>
            {selectedShip?.passengers}
          </p>
          <p className="mb-2 font-normal text-gray-700">
            <span className="font-bold">Max Atmosphering Speed: </span>
            {selectedShip?.max_atmosphering_speed}
          </p>
          <p className="mb-2 font-normal text-gray-700">
            <span className="font-bold">Manufacturer: </span>
            {selectedShip?.manufacturer}
          </p>
          <p className="mb-2 font-normal text-gray-700">
            <span className="font-bold">Crew: </span> {selectedShip?.crew}
          </p>
          <p className="mb-2 font-normal text-gray-700">
            <span className="font-bold">Cargo Capacity: </span>{" "}
            {selectedShip.cargo_capacity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ship;
