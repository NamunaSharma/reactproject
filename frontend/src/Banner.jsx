import React from "react";
import banner from "../src/components/Asset/Banner.png";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Book Store</h1>
          <div>
            <button
              className="text-white mr-4 hover:text-gray-300 focus:outline-none"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="bg-pink-500 text-white hover:bg-pink-600 py-2 px-4 rounded focus:outline-none"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new every day!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Open the door to endless worlds. Dive into our library of
              imagination, where every page holds a new adventure waiting to be
              discovered. Welcome to our online book emporium, where stories
              come to life and readers find their next great escape.
            </p>
            {/* <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label> */}
          </div>
          {/* <button className="btn mt-6 btn-secondary">Get Started</button> */}
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
