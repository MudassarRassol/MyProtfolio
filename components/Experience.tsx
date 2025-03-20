import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer",
      company: "Learn to Earn",
      duration: "2023",
      location: "Remote",
      responsibilities: [
        "Database administration and website design.",
        "Built the logic for a streamlined ad-serving platform that scaled.",
        "Worked on educational institutions and online classroom management solutions."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      duration: "2024 - 2025",
      location: "Remote",
      responsibilities: [
        "Developed responsive and interactive web interfaces using HTML, CSS, and JavaScript.",
        "Implemented React.js components for better user experience and maintainability.",
        "Collaborated with clients to design and develop custom web solutions based on business needs."
      ]
    },
    {
      role: "Intern - Web Developer",
      company: "Learn to Earn (Training Program)",
      duration: "6-Month Internship",
      location: "Pakpattan, Punjab",
      responsibilities: [
        "Completed hands-on training in web development, focusing on both frontend and backend technologies.",
        "Developed small projects using React, Node.js, Express, and MongoDB.",
        "Worked on debugging and performance optimization for web applications."
      ]
    },
    {
      role: "UI/UX Designer & Developer",
      company: "Creative Agency",
      duration: "2020 - 2021",
      location: "Remote",
      responsibilities: [
        "Designed interactive UI components ensuring accessibility and responsiveness across devices.",
        "Created wirefr ames and prototypes to visualize website layouts and improve user experience.",
        "Collaborated with designers and developers to translate Figma designs into fully functional web pages."
      ]
    }
  ]
  


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
