import React, { useState } from 'react';

const experiences = [
  {
    company: "Netlogistik",
    title: "Software Consultant",
    date: "JAN 2025 - PRESENT",
    details: [
      "Implemented Warehouse Labor Management (WLM) tools to enhance workforce productivity for clients such as OXXO, Soriana, and Farmacias del Ahorro, focusing on optimizing warehouse operations.",
      "Developed and automated configuration tools, reducing manual setup time by 40%, ensuring faster deployment and scalability across client systems."
    ]
  },
  {
    company: "Harman International",
    title: "Software Engineer Intern",
    date: "APR 2024 - JAN 2025",
    details: [
      "Designed and developed the Power Manager Database, in C# WPF, a desktop application that centralized data for three multidisciplinary teams. Enabled file version tracking and real-time updates, eliminating redundant design efforts and improving communication.",
      "Developed a Burndown Chart desktop applicationfor global teams (from Mexico to China) to track project progress based on Scrum methodologies. Provided real-time analysis of team and individual performance through visual charts."
    ]
  },
  {
    company: "Bosch",
    title: "Software Engineer I4.0 Intern",
    date: "JUN 2023 - APR 2024",
    details: [
      "Developed a cyclical counting web application to automate manual processes, initially deployed at the Querétaro plant and later expanded to the U.S. plant. The application leverages an Oracle database, allowing the team to track daily counts and store information centrally.",
      "Designed and implemented a Machine Learning system to detect defects in real-time through curve image analysis, reducing human error by 65%."
    ]
  }
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-black">
      <h2 className="text-3xl font-bold mb-10">/ experience</h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex md:flex-col gap-4 text-left">
          {experiences.map((exp, i) => (
            <button key={i} onClick={() => setActive(i)} className={`text-left px-4 py-2 rounded transition ${i === active ? 'bg-primary text-black' : 'hover:bg-gray-800'}`}>
              {exp.company}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{experiences[active].title} @ {experiences[active].company}</h3>
          <p className="text-sm text-gray-400 mb-4">{experiences[active].date}</p>
          <ul className="list-disc list-inside space-y-2">
            {experiences[active].details.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}