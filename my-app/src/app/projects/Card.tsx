import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type cardProp = {
  title: string;
  description: string;
  imgsrc: string | StaticImageData;
  url: string;
};

const Card = ({ title, description, imgsrc, url }: cardProp) => {
  return (
    <div className="flex justify-evenly flex-wrap gap-8 mt-12">
      <div className="relative h-[420px] w-80 border-2 rounded-lg  overflow-hidden transform transition duration-300 hover:scale-105 bg-gray-700 hover:shadow-2xl">
        <Image
          src={imgsrc}
          alt="image"
          className="w-full h-44 object-cover opacity-90 transition-transform transform hover:scale-110"
        />
        <div className="absolute top-0 right-0  text-5xl focus:scale-105 z-10 cursor-pointer border-none">
          <Link target="_blank" href={url}>
            <i className="fa-brands  fa-square-github"></i>
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 p-6 text-gray-300">
          <h2 className="text-xl text-teal-700 font-bold mt-2">{title}</h2>
          <p className="text-sm mt-2 leading-snug text-white opacity-60">
            {description}
          </p>
          <button className="mt-2 px-4 py-2 bg-purple-700 hover:bg-purple-600 text-sm rounded-full transition transform hover:scale-105">
            View Project
          </button>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-green-400 bg-green-900 bg-opacity-25 px-2 py-1 rounded-full text-[15px] font-semibold">
              #Typescript
            </span>
            <span className="text-purple-400 bg-purple-900 bg-opacity-25 px-2 py-1 rounded-full text-[15px] font-semibold">
              #React
            </span>
            <span className="text-blue-400 bg-blue-900 bg-opacity-25 px-2 py-1 rounded-full text-[15px] font-semibold">
              #Bootstrap
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
