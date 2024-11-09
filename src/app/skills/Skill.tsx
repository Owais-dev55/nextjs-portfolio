import React from "react";

const skills = [
  { name: "Typescript", icon: "fab fa-js", level: 95 },
  { name: "React", icon: "fab fa-react", level: 85 },
  { name: "Node.js", icon: "fab fa-node", level: 80 },
  { name: "Git", icon: "fab fa-git-alt", level: 70 },
  { name: "HTML", icon: "fab fa-html5", level: 75 },
  { name: "Css", icon: "fab fab fa-css3-alt", level: 90 },
];

const Skill = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-7xl text-teal-600 font-bold mb-4">My Skills</h2>
      <div className="flex justify-center">
        <p className="text-white max-w-5xl text-2xl text-center my-9">
          I have a strong foundation in TypeScript, JavaScript, HTML, and CSS,
          with expertise in React and Next.js. I’m skilled in version control
          using Git and excel at problem-solving to create responsive,
          user-friendly applications.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative bg-gradient-to-r from-gray-700 to-gray-800 p-8 rounded-lg transform transition-transform hover:scale-105"
          >
            <i className={`${skill.icon} text-5xl text-blue-400 mb-6`}></i>
            <h3 className="text-xl text-gray-300 font-semibold">
              {skill.name}
            </h3>
            <div className="relative w-24 h-24  mx-auto  my-6 ">
              <svg className="w-full h-full transform rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="38"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-600"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="38"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-blue-400 transition-all duration-500"
                  strokeDasharray="238"
                  strokeDashoffset={238 - (238 * skill.level) / 100}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-blue-400">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
