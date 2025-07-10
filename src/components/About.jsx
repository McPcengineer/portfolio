import React from 'react';
import profilePic from '../assets/profile.png';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-black text-gray-300">
      <h2 className="text-3xl font-bold mb-10 text-white">/ about me</h2>
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <p className="text-lg leading-relaxed">
            As a <span className="text-primary font-semibold">Full-Stack AI Engineer</span>, I build intelligent systems at <span className="text-primary font-semibold">Netlogistik</span>, I design and implement <span className="text-primary font-semibold">end-to-end digitalization systems</span> for supply chain operations. Currently looking for pursuing my <span className="text-primary font-semibold">Master's in AI</span> while obtaining <span className="text-primary font-semibold">AWS ML</span> certification.
          </p>
          
          <p className="text-lg leading-relaxed">
            My technical arsenal includes:
          </p>
          
          <ul className="grid grid-cols-2 gap-3 text-base">
            {/* AI/ML Stack */}
            <li className="flex items-center">
              <span className="text-primary mr-2">▹</span> TensorFlow/PyTorch
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">▹</span> Computer Vision (OpenCV)
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">▹</span> NLP (Transformers)
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">▹</span> LangChain/RAG
            </li>
            
            {/* Frontend/Cloud */}
            <li className="flex items-center">
              <span className="text-primary mr-2">▹</span> React.js/Next.js
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">▹</span> AWS SageMaker
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">▹</span> Docker/Kubernetes
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">▹</span> CI/CD Pipelines
            </li>
          </ul>
          
          <p className="text-lg leading-relaxed pt-4">
            I've built a <span className="text-primary">real-time defect detection system</span> reducing quality control errors by 65%, and a <span className="text-primary">NASA-challenge winning AI assistant</span> using fine-tuned LLMs. Passionate about deploying ML models at scale through robust <span className="text-primary">React interfaces</span> and <span className="text-primary">cloud architectures</span>.
          </p>
        </div>
        
        <motion.div
          className="relative w-72 h-72"
          whileHover={{
            scale: 1.05,
            transition: { type: 'spring', stiffness: 300 },
          }}
        >
          <div className="absolute inset-0 border-2 border-primary rounded-2xl translate-x-4 translate-y-4"></div>
          <img 
            src={profilePic} 
            alt="Marisabel Caraucan" 
            className="absolute inset-0 w-full h-full rounded-2xl object-cover z-10 border-2 border-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
}