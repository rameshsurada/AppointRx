import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { aToken, setAToken } = useContext(AdminContext);

  const logout = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <div>
          <p
            className="text-3xl text-blue-800 font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            AppointRx
          </p>
        </div>
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {" "}
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-primary  text-white text-sm px-10 py-2 rounded-full"
      >
        {" "}
        Logout
      </button>
    </div>
  );
};

export default Navbar;
