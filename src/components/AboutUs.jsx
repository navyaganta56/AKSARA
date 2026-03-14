import React from 'react';
import { Users, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import DancingText from './DancingText';

const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
    <div className={`p-4 rounded-full ${color} text-white mb-4 group-hover:scale-110 transition-transform`}>
      <Icon size={32} />
    </div>
    <h3 className="text-3xl font-extrabold text-[#1E3A5F] mb-1">{value}</h3>
    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{label}</p>
  </div>
);

const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-12 bg-transparent max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h4 className="text-[#F97316] font-bold tracking-widest uppercase mb-2">About Us</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] mb-4">Welcome to <DancingText text="Akshara High School" className="rainbow-school-text" /></h2>
        <div className="w-24 h-1.5 bg-[#F97316] mx-auto rounded-full mb-6"></div>
        <p className="text-[#F97316] text-xl font-bold tracking-tight">IIT & NEET Foundation Academy</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text */}
        <div className="space-y-6 text-[#1E293B] text-lg leading-relaxed">
          <p>
            <DancingText text="Akshara High School" className="font-bold rainbow-school-text" /> is a premier educational institution dedicated to nurturing young minds with a perfect blend of academic excellence and holistic development. Our school provides education from <span className="font-semibold text-[#1E3A5F]">Nursery to Grade 10</span> with a focus on overall development.
          </p>
          <p>
            We offer special coaching for <span className="text-[#F97316] font-bold">IIT, JEE, and NEET</span> exams, helping students achieve their dreams of becoming engineers and doctors. Our mission is to provide a safe, disciplined, and friendly environment where students can learn, grow, and succeed in life.
          </p>
          <p>
            With state-of-the-art facilities, experienced faculty, and innovative teaching methods, we ensure every child reaches their full potential. Our unique programs like the Bedrock Program, Smart Programmes, and Digital Classes set us apart from the rest.
          </p>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          <StatCard
            icon={Users}
            value="1500+"
            label="Students"
            color="bg-[#1E3A5F]"
          />
          <StatCard
            icon={GraduationCap}
            value="80+"
            label="Expert Faculty"
            color="bg-green-700"
          />
          <StatCard
            icon={Calendar}
            value="15+"
            label="Years Exp"
            color="bg-[#F97316]"
          />
          <StatCard
            icon={BookOpen}
            value="20+"
            label="Programs"
            color="bg-sky-600"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
