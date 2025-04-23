import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      console.log("fired");
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password
        });

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          console.log(data.message);
          toast.error(data.message);
        }
      } else {
      }
    } catch (e) {}
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      {" "}
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary"> {state}</span> Login{" "}
        </p>
        <div className="w-full">
          <p> Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p> Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
          />
        </div>
        <button className="bg-primary text-white w-full rounded-md text-base py-2">
          {" "}
          Login
        </button>
        {state === "Admin" ? (
          <p>
            {" "}
            Doctor login ?{" "}
            <span
              onClick={() => setState("Doctor")}
              className="text-primary underline cursor-pointer"
            >
              {" "}
              click here
            </span>
          </p>
        ) : (
          <p>
            {" "}
            Admin Login ?{" "}
            <span
              onClick={() => setState("Admin")}
              className="text-primary underline  cursor-pointer"
            >
              {" "}
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
