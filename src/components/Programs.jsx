import React from 'react';
import { motion } from 'framer-motion';
import { Target, Book, Languages, MessageCircle, Music, Monitor, Laptop, FlaskConical, Users } from 'lucide-react';

const ProgramCard = ({ icon: Icon, title, description, benefits, accentColor }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 hover:shadow-2xl transition-all duration-300"
    style={{ borderTopColor: accentColor }}
  >
    <div className="p-8">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">{title}</h3>
      <p className="text-slate-600 mb-6 text-sm">{description}</p>
      {benefits && (
        <ul className="space-y-3">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start text-xs text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: accentColor }}></div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const Programs = () => {
  const programs = [
    {
      icon: Target,
      title: "IIT & NEET Foundation Classes",
      description: "Expert faculty guiding students from basic to advanced concepts.",
      benefits: ["Concept-based learning focused on understanding", "Regular practice tests and doubt clarification sessions"],
      accentColor: "#4F46E5"
    },
    {
      icon: Book,
      title: "Bedrock Program",
      description: "Focus on fundamentals to strengthen the learning base.",
      benefits: ["Helps students recollect and revise the previous year's syllabus", "Smooth transition into the new academic curriculum"],
      accentColor: "#10B981"
    },
    {
      icon: Languages,
      title: "Dakshina Bharata Hindi Classes",
      description: "Systematic Hindi language training through certified courses.",
      benefits: ["Enhances reading, writing, and speaking abilities in Hindi", "Prepares students for official Sabha exams"],
      accentColor: "#F59E0B"
    },
    {
      icon: MessageCircle,
      title: "Spoken English Classes",
      description: "Focus on pronunciation, fluency, and vocabulary building.",
      benefits: ["Regular conversation practice and interactive activities", "Specially prepared Communicative Skills books"],
      accentColor: "#06B6D4"
    },
    {
      icon: Music,
      title: "Smart Programmes",
      description: "Encourages public speaking through fun, short-stage performances.",
      benefits: ["Builds confidence and removes stage fear from an early age", "Activities include storytelling, recitation, and mini presentations"],
      accentColor: "#D946EF"
    },
    {
      icon: Monitor,
      title: "Computer Lab",
      description: "Well-equipped lab with modern computers and high-speed internet.",
      benefits: ["Hands-on training in basic to advanced computer applications", "Regular computer periods for all grades"],
      accentColor: "#10B981"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-[#F97316] font-bold tracking-widest uppercase mb-2 text-sm">Our Programs</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] mb-4">Key Features & Programs</h2>
          <div className="w-24 h-1.5 bg-[#F97316] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
