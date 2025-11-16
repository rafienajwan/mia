import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'Gani Abi Saputra Van Sigu',
      role: 'Front-end Developer',
      tag1: 'Leader',
      tag2: 'Web Developer',
      description: 'A Front-End Developer is someone who Develops and designs the visual side of a website.',
      image: '/profile-gani.png',
      linkedin: 'https://linkedin.com/in/gani-profile',
      instagram: 'https://instagram.com/gani.username'
    },
    {
      name: 'Rafie Najwan Anjasmara',
      role: 'Back-end Developer',
      tag1: 'Member',
      tag2: 'Web Developer',
      description: 'A Back-End Developer is someone who develops and maintains the server and database of a website or web App.',
      image: '/profile-anjas.png',
      linkedin: 'https://linkedin.com/in/anjas-profile',
      instagram: 'https://instagram.com/anjas.username'
    },
    {
      name: 'Dicky Karlio Radinata',
      role: 'Data Analyst',
      tag1: 'Member',
      tag2: 'Web Developer',
      description: 'A Data Analyst is someone who, Collects, processes, and interprets data to support decisions.',
      image: '/profile-dicky.png',
      linkedin: 'https://linkedin.com/in/dicky-profile',
      instagram: 'https://instagram.com/dicky.username'
    }
  ];

  const contactInfo = {
    whatsapp: '+62 857 3050 0101',
    email: 'lexlegumqeon@gmail.com',
    location: 'UPN Veteran Jawa Timur'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeNav="about" />
      
      <section className="max-w-6xl mx-auto px-8 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="flex-shrink-0">
            <img 
              src="/aboutlogo.png" 
              alt="Lex Legum Qeon Logo" 
              className="w-80 h-80 object-contain"
            />
          </div>

          <div className="flex-1 max-w-xl text-left space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Lex Legum Qeon
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              sebagai wadah untuk UMKM yang cukup menonjol namun tidak ada wadah untuk mempromosikan usahanya. Dengan fitur minimalis, kami berharap website ini mudah untuk dipahami dan dijelajahi, serta diakses secara publik.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
      </div>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Meet the team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-[#4A5F7F] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="px-8 pt-8 pb-6">
                <div className="flex gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-gray-800">
                    {member.tag1}
                  </span>
                  <span className="px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-gray-800">
                    {member.tag2}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white leading-tight mb-3">
                  {member.role.split(' ')[0]}<br/>
                  {member.role.split(' ').slice(1).join(' ')}
                </h3>
                
                <p className="text-sm text-white/90 leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="relative bg-white overflow-hidden aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>

              <div className="bg-[#5D7C96] px-8 py-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white flex-1 pr-3">
                    {member.name}
                  </h4>
                  
                  <div className="flex gap-3 flex-shrink-0">
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <FaInstagram className="text-white text-xl" />
                    </a>
                    
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <FaLinkedin className="text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
      </div>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`} // Ensure proper string interpolation
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gradient-to-br from-[#4A5F7F] to-[#3D4E6B] rounded-3xl p-8 text-center text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaWhatsapp className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
              <p className="text-sm opacity-90">{contactInfo.whatsapp}</p>
            </div>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="group"
          >
            <div className="bg-gradient-to-br from-[#4A5F7F] to-[#3D4E6B] rounded-3xl p-8 text-center text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-sm opacity-90">{contactInfo.email}</p>
            </div>
          </a>

          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-[#4A5F7F] to-[#3D4E6B] rounded-3xl p-8 text-center text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Location</h3>
              <p className="text-sm opacity-90">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;