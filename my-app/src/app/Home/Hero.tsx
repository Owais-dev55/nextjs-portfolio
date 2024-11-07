"use client";
import Link from "next/link";
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="relative img flex flex-col lg:flex-row items-center justify-center min-h-screen w-full bg-cover bg-center">
        <div className="m-8 w-full text-white lg:w-1/2 text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-wide">
            Hi! I'm Muhammad <span className="text-teal-600">Owais</span>{" "}
            Khiljee
          </h1>
          <h2 className="text-3xl font-semibold uppercase mt-8">
            &#11088; UI/UX Designer / Frontend Developer
          </h2>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="flex md:flex-wrap md:justify-center lg:flex-col lg:items-center gap-6 border border-gray-300 bg-white bg-opacity-60 p-6 rounded-3xl lg:mt-12 shadow-md hover:shadow-lg transition duration-300">
            <Link
              href="https://www.facebook.com/share/14Hnt8gkx1/"
              target="_blank"
            >
              <i className="icons fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.instagram.com/known_user83?igsh=MTEyeDV1N2c3czl6cg=="
              target="_blank"
            >
              <i className="icons fa-brands fa-instagram"></i>
            </Link>
            <Link href="https://github.com/Owais-dev55" target="_blank">
              <i className="icons fa-brands fa-github"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/owais-khilji-333owais2386556/"
              target="_blank"
            >
              <i className="icons fa-brands fa-linkedin-in"></i>
            </Link>
            <Link href="mailto:OwaisKhiljee6556@gmail.com" target="_blank">
              <i className="icons fa-solid fa-envelope"></i>
            </Link>
            <Link href="" target="_blank">
              <i className="icons fa-brands fa-twitter"></i>
            </Link>
            <Link href="https://wa.me/923332386556" target="_blank">
              <i className="icons fa-brands fa-whatsapp"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
