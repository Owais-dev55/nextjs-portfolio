import React from "react";
import Card from "./Card";
import Spline from "@splinetool/react-spline/next";
import image1 from "../../../Public/growth-4777468_1280.jpg";
import image2 from "../../../public/computer-8779036_1280.jpg";
import image3 from "../../../public/icon-1379228_1280.png";
import image4 from "../../../public/web-design-2038872_1280.jpg";

const Intro = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-12 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between h-full lg:h-screen mb-12">
        <div className="w-full lg:w-[800px] mr-2 lg:pr-6 mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Introduction</h1>
          <h2 className="text-teal-600 text-3xl sm:text-5xl lg:text-7xl mt-2">Overview.</h2>
          <p className="mt-4 text-base sm:text-lg lg:text-2xl opacity-80 tracking-wide leading-relaxed text-justify">
            I am a passionate and skilled frontend developer with a strong
            foundation in TypeScript, JavaScript, HTML, CSS, along with
            proficiency in version control using Git and modern frameworks like
            React and Next. I have hands-on experience creating responsive and
            visually appealing applications, such as an e-commerce website and a
            weather app, with a focus on clean, efficient, and scalable code.
            Problem-solving is at the core of my approach; I enjoy tackling
            challenges and optimizing code to improve performance and usability.
            I am dedicated to refining my skills and keeping up with the latest
            web development trends to deliver seamless user experiences. With an
            eye for design and a keen understanding of user interaction, I bring
            both functionality and aesthetics to my projects. I am committed to
            continuous learning and building impactful, user-centered solutions.
          </p>
        </div>

        <div className="w-full lg:w-[850px] flex justify-center lg:justify-end relative h-[500px] sm:h-[600px] lg:h-[800px]">
          <Spline
            scene="https://prod.spline.design/sgW3QowpCJA-JDDI/scene.splinecode"
          />
          <div className="absolute bottom-0 right-0 w-40 h-12 bg-black border-none hidden lg:block">
</div>
          {/* <div className="absolute bottom-0 right-0 w-20 h-8 sm:w-32 sm:mb-3 sm:h-10 lg:w-40 lg:h-12 bg-black border-none  "></div> */}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Card title1="Growth Leader" imageSrc={image1} />
        <Card title1="Web Developer" imageSrc={image2} />
        <Card title1="React" imageSrc={image3} />
        <Card title1="UI/UX Designer" imageSrc={image4} />
      </div>
    </div>
  );
};

export default Intro;
