import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Valor PayTech · Full-time",
      duration: "December 2024 - Present",
      location: "Chennai, India - Onsite",
      responsibilities: [
        "Implemented feature enhancements based on user feedback, contributing to continuous improvement and increased customer satisfaction.",
        "Identified and resolved software bugs through thorough testing and debugging, ensuring a seamless user experience and maintaining application stability.",
        "Collaborated with multiple internal teams to gather requirements and prioritize bug fixes and feature requests, ensuring alignment with overall project objectives.",
        "Conducted peer reviews, fostering a culture of collaboration and continuous learning within the team.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc. · Contract",
      duration: "June 2023 - November 2024",
      location: "Remote",
      responsibilities: [
        "Developed and optimized UI components using React.js and Tailwind CSS, improving user engagement and accessibility.",
        "Worked closely with backend developers to integrate RESTful APIs and ensure seamless data flow.",
        "Optimized application performance, reducing page load time by 30% through efficient code refactoring.",
        "Collaborated with UX designers to improve usability and implemented A/B testing strategies.",
      ],
    },
    {
      role: "UI Developer",
      company: "Creative Agency · Full-time",
      duration: "March 2022 - May 2023",
      location: "Bangalore, India - Hybrid",
      responsibilities: [
        "Designed and developed interactive UI components, ensuring accessibility and responsiveness across all devices.",
        "Enhanced animations and transitions using Framer Motion to improve user engagement.",
        "Created reusable design systems and maintained a component library for better scalability.",
        "Collaborated with designers and developers to translate Figma designs into live products.",
      ],
    },
    {
      role: "Intern - Web Developer",
      company: "Startup XYZ · Internship",
      duration: "August 2021 - February 2022",
      location: "Remote",
      responsibilities: [
        "Assisted in developing web applications using React.js and Node.js.",
        "Fixed bugs and improved website performance by optimizing API calls.",
        "Created basic RESTful APIs for minor backend integrations.",
        "Contributed to documentation and testing processes for a smooth development workflow.",
      ],
    },
  ];


  return (
    <div
      id="experience"
      className="h-auto md:min-h-[100vh] w-full border-t-2 border-[#FE4F2D] px-6 py-10"
    >
      <h1 className="text-4xl text-center font-bold text-[#FE4F2D]">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0  md:gap-2 w-[90%] md:w-[70%] mx-auto mt-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={` border-[#FE4F2D]  p-4 
               ${
              index == 0 && ' border-l-2 border-b-2 md:border-r-2 md:border-b-0 md:border-l-0  '  || index == 1 && 'border-l-2 border-b-2  md:border-l-0' 
              || index == 2 && ' border-l-2 border-b-2 md:border-t-2 md:border-l-0 md:border-b-0 ' || index == 3 && ' border-l-2 '
            }`}
          >
            <h2 className="text-xl font-semibold text-[#FE4F2D]">{exp.role}</h2>
            <p className="">{exp.company}</p>
            <p className=" text-sm">{exp.duration} | {exp.location}</p>
            <ul className="mt-3 space-y-2  text-sm">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="list-disc list-inside">{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
