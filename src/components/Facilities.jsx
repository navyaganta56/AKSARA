import React from 'react';
import { Monitor, Book, FlaskConical, Calculator, MessageSquare, GraduationCap, Trophy, ShieldCheck } from 'lucide-react';

const FacilityCard = ({ icon: Icon, title, description, color }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className={`mb-6 text-[${color}] group-hover:scale-110 transition-transform`}>
      <Icon size={40} style={{ color }} />
    </div>
    <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const Facilities = () => {
  const facilities = [
    {
      icon: Monitor,
      title: "Spacious & Smart Classrooms",
      description: "Well-equipped rooms with digital boards and interactive panels for easy and effective learning.",
      color: "#2563EB"
    },
    {
      icon: Book,
      title: "Library",
      description: "A quiet place with many books where students can read, study, and gain knowledge.",
      color: "#16A34A"
    },
    {
      icon: FlaskConical,
      title: "Science & Computer Lab",
      description: "Well-equipped Science and Computer Labs to help students learn through practical experience.",
      color: "#9333EA"
    },
    {
      icon: Calculator,
      title: "Abacus Classes",
      description: "Fun learning sessions that help students improve memory, speed, and problem-solving skills through mental math.",
      color: "#F59E0B"
    },
    {
      icon: MessageSquare,
      title: "Spoken English Classes",
      description: "Special classes to help students speak English confidently, improve communication skills, and build fluency.",
      color: "#0891B2"
    },
    {
      icon: GraduationCap,
      title: "IIT & NEET Coaching",
      description: "Special training to help students prepare for competitive exams and achieve their goals.",
      color: "#6366F1"
    },
    {
      icon: Trophy,
      title: "Sports & Games",
      description: "Sports and games are an important part of student life. Playing helps students stay healthy, active, and happy.",
      color: "#E11D48"
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure Campus",
      description: "Ensuring student safety with proper boundary, CCTV surveillance, and supervision at all times.",
      color: "#16A34A"
    }
  ];

  return (
    <section id="facilities" className="py-24 px-4 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-[#F97316] font-bold tracking-widest uppercase mb-2 text-sm">Our Facilities</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] mb-4">What We Offer</h2>
          <div className="w-24 h-1.5 bg-green-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
