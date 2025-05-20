import React from "react";
import Card from "./Card";
import image1 from '@/Public/updated.png'
import image2 from '@/Public/weather app.png'
const Projects = () => {
  return (
    <div>
      <div className=" h-full p-4 sm:p-6 lg:p-12">
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
            description="E-Commerce Website A responsive online store built with Next.js, and Sanity, featuring dynamic product listings, search, authentication, and Stripe payments for a seamless shopping experience."
            imgsrc={image1}
            url="https://github.com/Owais-dev55/nextjs-e-commerce"
            proUrl="https://nextjs-vogueaura.vercel.app/"
            bread1="Nextjs"
            bread2="Typescript"
            bread3="Sanity"
          />
          <Card
            title="Weather-App"
            description=" Stay informed with real-time weather updates and forecasts at your
    fingertips. Experience a user-friendly interface that delivers
    accurate and reliable weather information wherever you go."
            imgsrc={image2}
            url="https://github.com/Owais-dev55/Weather-App-React.TS"
            proUrl="https://weather-app-react-ts-eight.vercel.app/"
            bread1="React"
            bread2="Typescript"
            bread3="Tailwind"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
