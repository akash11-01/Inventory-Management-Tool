import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/update", {
      state: { id: props.id }, // passing data
    });
  };
  return (
    <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-64 max-w-64  w-full mt-2">
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition "
          src={
            "https://cdn.dribbble.com/userupload/4295953/file/original-38872e7c6200d615a8367b872b4e97bf.png?compress=1&resize=1200x900"
          }
          alt={props.name}
        />
      </div>
      <div className="text-gray-500/60 text-sm ">
        <div className="flex">
          <p className="text-gray-700 font-medium text-lg truncate w-full">
            {props.name}
          </p>
          <p className="md:text-xl text-base font-medium text-indigo-500">
            ₹{props.price}{" "}
          </p>
        </div>
        <div className="">
          <p className="mt-2">
            Quantity:{" "}
            <span className="text-black font-semibold">{props.quantity}</span>{" "}
          </p>
          <p className="mt-1 break-words overflow-hidden  ">
            {props.description}
          </p>
          <button
            onClick={handleClick}
            className="bg-slate-700 text-white p-3 mt-1 ml-10 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            update quantity
          </button>
        </div>
      </div>
    </div>
  );
}
