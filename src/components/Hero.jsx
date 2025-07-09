import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import neuralAnimation from '../assets/neural-network.json';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-background text-textLight">
      <div className="w-60 h-60 mb-6">
        <Lottie animationData={neuralAnimation} loop={true} />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold">
        hi, marisabel here<span className="text-primary">!</span>
      </h1>
      <h2 className="text-lg md:text-2xl mt-4">
        <Typewriter
          words={['I create stuff sometimes.']}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
        I'm a software engineer living in Queretaro, Mexico, specializing in industrial software solutions with Python. 
        Developed AI-powered systems for important clients, optimizing warehouse operations 
        and defect detection by 65%. Passionate about bridging technical innovation with 
        real-world business impact.
      </p>
      <a 
        href="mailto:mcaura2009@gmail.com" 
        className="mt-6 inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-black transition"
      >
        <span>📧</span> Say hi!
      </a>
    </section>
  );
}