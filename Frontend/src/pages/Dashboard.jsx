import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      const res = await fetch("/api/user/logout");
      const data = await res.json();
      if (data.success === true) {
        navigate("/");
      }
    } catch (error) {
      return error.message;
    }
  };
  return (
    <div className="flex">
      <div className="bg-slate-800 h-screen w-[22%]">
        <div className="h-[11%] w-full flex justify-around items-center gap-2 border-b-2">
          <img
            src={
              "https://cdn.dribbble.com/userupload/4295953/file/original-38872e7c6200d615a8367b872b4e97bf.png?compress=1&resize=1200x900"
            }
            alt="profile-pic"
            className="h-16 w-16 rounded-full "
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-white">DummyUser</h1>
            <button onClick={handleLogOut} className="bg-white p-1 rounded-md">
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-3 text-white ml-2">
          <Link to={"add"}>
            <div className="flex items-center gap-2 ml-1">
              {/* <FaHome /> */}
              <p>Add Product</p>
            </div>
          </Link>
          <Link to={"list"}>
            <div className="flex items-center gap-2 ml-1">
              {/* <TbFileInvoice /> */}
              <p>Product List</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-slate-100 h-screen w-[80%]">
        <Outlet />
      </div>
    </div>
  );
}
