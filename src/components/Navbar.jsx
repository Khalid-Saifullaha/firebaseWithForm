import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-900 text-white py-4">
      <div>
        <h1>Khalid</h1>
      </div>
      <div>
        <ul className="flex ">
          <li className="mx-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-3">
            <Link to={"/product"}>Products</Link>
          </li>
          <li className="mx-3">
            <Link to={"/login"}>Login/SignIn</Link>
          </li>
          <li className="mx-3">
            <Link to={"/register"}>Register/SignUp</Link>
          </li>
          <li className="mx-3">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
