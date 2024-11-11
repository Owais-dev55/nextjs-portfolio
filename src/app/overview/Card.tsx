import React from "react";
import Image, { StaticImageData } from "next/image";

type CardProps = {
  title1: string;
  imageSrc: string | StaticImageData;
};

const Card = ({ title1, imageSrc }: CardProps) => {
  return (
    <div className="flex justify-center items-center text-white mt-12">
      <div className="h-[400px] w-[300px] border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="h-2/3 w-full relative">
        <Image src={imageSrc} alt="image" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex flex-col items-center justify-center text-center h-1/3 bg-gray-800 p-4">
          <h1 className="text-2xl font-bold uppercase">{title1}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
