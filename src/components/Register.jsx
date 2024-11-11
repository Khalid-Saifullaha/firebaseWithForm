import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";

const Register = () => {
  return (
    <div>
      <form className="bg-slate-900 text-white  w-1/2 mx-auto my-6 p-10 shadow-2xl rounded-lg ">
        <h2 className="text-center text-3xl mb-5">Register/SignUp</h2>

        <input
          className="block w-full p-2  text-black"
          type="text"
          name="name"
          id=""
          placeholder="Write your full name"
        />
        <input
          className="block w-full p-2 my-4  text-black"
          type="email"
          name="email"
          id=""
          placeholder="E-mail"
        />
        <input
          className="block w-full p-2 my-4 text-black"
          type="password"
          name="password"
          id=""
          placeholder="Enter Password"
        />
        <input
          className="block w-full p-2 my-4 text-black"
          type="password"
          name="password"
          id=""
          placeholder="Confirm Password"
        />

        <div className="flex justify-between">
          <div>
            <input type="checkbox" name="checkbox" id="forChecked" />
            <label htmlFor="forChecked"> Show Password</label>
          </div>
          <p>
            <input type="checkbox" name="" id="termsAndCondition" />
            <label htmlFor="termsAndCondition">
              I agree to the{" "}
              <Link className="text-cyan-400" to={"/termscondition"}>
                Terms & Condition
              </Link>
            </label>
          </p>
        </div>

        <input
          className="block w-full bg-cyan-900 hover:bg-cyan-950 my-5 p-2 rounded-lg"
          type="submit"
          value="Register/Sign Up"
        />

        <div className="flex justify-center items-center space-x-3 my-4">
          <hr className="w-1/4 border-gray-400" />
          <span>Or Continue with</span>
          <hr className="w-1/4 border-gray-400" />
        </div>

        <p className="border w-1/2 mx-auto my-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-950 cursor-pointer">
          <button className="flex mx-auto">
            <FcGoogle className="mt-1 mr-2"></FcGoogle>
            <span>Login with Google</span>
          </button>
        </p>
        <p className="border w-1/2 mx-auto my-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-950 cursor-pointer">
          <button className="flex mx-auto">
            <BsFacebook className="mt-1 mr-2"></BsFacebook>
            <span>Login with Facebook</span>
          </button>
        </p>
        <p className="border w-1/2 mx-auto my-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-950 cursor-pointer">
          <button className="flex mx-auto">
            <BsGithub className="mt-1 mr-2"></BsGithub>
            <span>Login with Github</span>
          </button>
        </p>

        <p className="text-center mt-8">
          Already have an account? Please
          <Link
            className=" text-cyan-400 hover:text-cyan-500 hover:underline"
            to={"/login"}
          >
            Login/SignIn
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
