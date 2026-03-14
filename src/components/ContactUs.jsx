import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
    <div className="w-12 h-12 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center flex-shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-[#1E3A5F] mb-1">{title}</h4>
      <p className="text-slate-600 text-sm whitespace-pre-line">{content}</p>
    </div>
  </div>
);

const ContactUs = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-[#F97316] font-bold tracking-widest uppercase mb-2 text-sm">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] mb-4">Contact Us</h2>
          <div className="w-24 h-1.5 bg-[#1E3A5F] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full h-12 rounded-xl border border-slate-200 px-4 focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full h-12 rounded-xl border border-slate-200 px-4 focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about Admission" 
                  className="w-full h-12 rounded-xl border border-slate-200 px-4 focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  placeholder="How can we help you?" 
                  rows="5"
                  className="w-full rounded-xl border border-slate-200 p-4 focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-[#1E3A5F] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#162d4a] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-900/20">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <ContactInfo 
              icon={MapPin}
              title="Our Location"
              content={"123 Education Lane,\nKnowledge City, State - 500001"}
            />
            <ContactInfo 
              icon={Phone}
              title="Call Us"
              content={"+91 85002 97704"}
            />
            <ContactInfo 
              icon={Mail}
              title="Email Us"
              content={"aksharahighschool1996@gmail.com"}
            />

            {/* Google Maps Placeholder */}
            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <iframe 
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11340.54!2d78.47!3d17.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzI0LjAiTiA3OMKwMjgnMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
