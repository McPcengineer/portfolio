import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "STAR: AI Copilot for NASA Missions",
  description: "Grand Prize-winning AI assistant at NASA SpaceApps Challenge. Processes 10,000+ NASA documents via fine-tuned LLMs (Llama2) to provide real-time mission support. Features voice interface, RAG architecture, and crisis response protocols for astronauts.",
  tech: [
    "Python", 
    "Llama2 (Fine-Tuned)", 
    "LangChain", 
    "RAG Architecture", 
    "TensorFlow", 
    "HuggingFace", 
    "Next.js", 
    "AWS Transcribe"
  ],
    github: "https://github.com/McPcengineer/OptiNav-Support-Solutions"
  },
  {
    title: "AI-Powered Gait Analysis",
    description: "Second-place international winner (AI Call Madrid) for knee injury prediction system using MediaPipe. Analyzes 20+ biomechanical parameters with 89% accuracy, featured at Universidad Politécnica de Madrid.",
    tech: [
      "Python", 
      "MediaPipe", 
      "PyTorch", 
      "OpenCV", 
      "Flask API", 
      "D3.js"
    ],
    github: "https://github.com/McPcengineer/AI-Powered-Gait-Analysis"
  },
   {
    title: "AquaTerraX: Environmental Monitoring Platform",
    description: "Web-based solution for pollution tracking in Guanajuato, combining crowdsourced reports with interactive mapping to identify contaminated zones. Features gamified clean-up rewards, educational tools for children, and real-time community alerts—reducing environmental risks by 40% in pilot areas.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Mapbox GL JS",
      "Firebase (Auth/DB)",
      "Node.js",
      "TensorFlow.js (Risk Prediction)",
      "AWS S3 (Image Storage)"
    ],
    github: "https://github.com/McPcengineer/AquaTerrax"
  },
  {
    title: "Portfolio Website",
    description: "A responsive, performant portfolio website built with React and Tailwind CSS. Showcases my professional projects, technical skills, and achievements.",
    tech: ["React", "TailwindCSS"],
    github: "https://github.com/McPcengineer/Portfolio-Website"
  },
  {
    title: "AI Claim Detection",
    description: "Machine learning model to identify noise claims in automotive production.",
    tech: ["Python", "Scikit-learn"],
    github: "https://github.com/McPcengineer/AI-Claim-Detection"
  },
 {
    title: "JARVIS-like Voice Assistant",
    description: "Voice-controlled desktop automation tool that executes commands (open apps, web search, play music) with 90% accuracy using NLP. Supports custom wake words and multi-language queries.",
    tech: [
      "Python",
      "SpeechRecognition",
      "Scikit-learn",
      "PyAutoGUI",
      "Spotify API"
    ],
    github: "https://github.com/McPcengineer/JARVIS-Voice-Assistant"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-black">
      <h2 className="text-3xl font-bold mb-10">/ pet projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="text-sm text-gray-400 mb-2">{project.tech.join(', ')}</div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
              <FaGithub /> View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}