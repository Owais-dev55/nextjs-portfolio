import React from "react";
import "./contact.css";
import Model from "../Component/3DModel/Model";

const Contact = () => {

  return (
    <footer className=" text-gray-100">
      <div className="flex flex-col md:flex-row w-full min-h-screen overflow-hidden">
        <div className="text-gray-800 w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl text-white text-center font-bold mb-6">
            Contact Us
          </h1>
          <form className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter your name"
              className="input"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input"
            />
            <textarea
              placeholder="Enter your message"
              className="input"
              rows={4}
            />
            <button className="bg-blue-600 text-white w-3/4 p-3 md:w-3/4 rounded-lg hover:bg-blue-700 transition duration-200">
              Send Me
            </button>
          </form>
        </div>
        <div className=" w-full md:w-1/2 earth bg-cover relative">
          <Model scene="https://prod.spline.design/aw30GchNNCoUblnw/scene.splinecode"/>
          <div className="absolute bottom-0 right-0 w-40 h-12 bg-black border-none"></div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
