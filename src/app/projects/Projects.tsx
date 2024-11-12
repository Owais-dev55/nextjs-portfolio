import React from "react";
import Card from "./Card";
import image1 from '@/Public/e-commerce website.png'
import image2 from '@/Public/weather app.png'
const Projects = () => {
  return (
    <div>
      <div className="m-12 h-full">
        <h1 className="text-3xl text-white">My work</h1>
        <h1 className="text-teal-600 text-7xl">Projects.</h1>
        <p className="mt-4 text-lg md:text-2xl text-white opacity-80  p-4  max-w-3xl mx-auto lg:mx-0 leading-relaxed text-justify">
          Projects are crucial for developers as they provide hands-on
          experience, allowing them to apply theoretical knowledge and improve
          problem-solving skills. They demonstrate a developer&apos;s abilities to
          potential employers, showcasing proficiency with technologies and
          frameworks. Additionally, projects enhance collaboration and
          communication skills, essential in team environments.
        </p>
        <div className="flex flex-wrap gap-16 justify-center space-x-4">
          <Card
            title="E-commerce website"
            description="Discover a curated selection of high-quality products tailored to
            your needs, all at unbeatable prices. Shop with confidence and enjoy
            a seamless online shopping experience from the comfort of your home"
            imgsrc={image1}
            url="https://github.com/Owais-dev55/E-commerce-website-React.TS"
            proUrl="https://vogueaura.vercel.app/"
          />
          <Card
            title="Weather-App"
            description=" Stay informed with real-time weather updates and forecasts at your
    fingertips. Experience a user-friendly interface that delivers
    accurate and reliable weather information wherever you go."
            imgsrc={image2}
            url="https://github.com/Owais-dev55/Weather-App-React.TS"
            proUrl="https://weather-app-react-ts-eight.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
