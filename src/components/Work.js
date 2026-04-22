import React, { useState } from 'react';
import tm from '../assets/text-to-speech.png';
import l from '../assets/logo.png'
import i from '../assets/icon.png'
import a from '../assets/logo-white.png'
import e from '../assets/eco.png'
import c from '../assets/chat.png'
import cr from '../assets/cr.png'
const projects = {
  software: [
    { id: 1, title: 'Text to speech', image: tm, demoLink: 'https://github.com/sanchitbajaj123/Text-to-speech', viewLink: 'https://github.com/sanchitbajaj123/Text-to-speech' },
    { id: 2, title: 'Attendance system', image:l, demoLink: 'https://github.com/sanchitbajaj123/Attendance-project-for-factory', viewLink: 'https://github.com/sanchitbajaj123/Attendance-project-for-factory' },
    { id: 3, title: 'Digi park', image:i, demoLink: 'https://github.com/sanchitbajaj123/digi-park', viewLink: 'https://github.com/sanchitbajaj123/digi-park' },
    { id: 3, title: 'Eco innovate', image:e, demoLink: 'https://github.com/sanchitbajaj123/ECO-INNOVATIVE', viewLink: 'https://github.com/sanchitbajaj123/ECO-INNOVATIVE' },
  ],
  websites: [
    { id: 1, title: 'Chat room', image:c , demoLink: 'https://github.com/sanchitbajaj123/chat-room', viewLink: 'https://chat-room-78me.onrender.com/ ' },
    { id: 2, title: 'Optical shop frontend', image: 'https://www.colosseinglasses.com/cdn/shop/products/product-image-524594496_540x.jpg?v=1643187318', demoLink: 'https://github.com/sanchitbajaj123/optical-project', viewLink: 'http://optical-project.onrender.com/' },
    { id: 3, title: 'Customer record keeper', image:cr , demoLink: 'https://github.com/sanchitbajaj123/customer-record', viewLink: 'https://customer-record-2.onrender.com/' },
    { id: 4, title: 'Lpu express', image: 'https://lpu-express.netlify.app/static/media/logo.8c16eaec7ce11362ff97.png', demoLink: 'https://github.com/sanchitbajaj123/LPU_express_v2', viewLink: 'https://lpu-express.netlify.app/' },
    { id: 5, title: 'Aasara-pgt', image:a, demoLink: 'https://github.com/sanchitbajaj123/ASARA-GPT', viewLink: 'https://aasara-gptt.vercel.app/' },
  ],
};

const Work = () => {
  const [activeTab, setActiveTab] = useState('software');
  const [transitionState, setTransitionState] = useState('opacity-100');

  const handleTabChange = (tab) => {
    setTransitionState('opacity-10 scale-95');
    setTimeout(() => {
      setActiveTab(tab);
      setTransitionState('opacity-100 scale-100');
    }, 300);
  };

  return (
    <section className='mt-40 min-h-[85vh] lg:min-h-[78vh]' id='work'>
      <div className='container mx-auto text-center'>
        <h2 className='text-[50px] mb-8 font-bold text-accent'>PROJECTS</h2>
        <div className='flex justify-center mb-8'>
          <button
            className={`btn px-6 py-3 rounded-full transition-colors ${activeTab === 'software' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleTabChange('software')}
          >
            Software
          </button>
          <button
            className={`btn w-auto px-6 py-3 rounded-full transition-colors ml-4 ${activeTab === 'websites' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleTabChange('websites')}
          >
            Websites
          </button>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 duration-300 ${transitionState}`}>
          {projects[activeTab].map(project => (
            <div
              key={project.id}
              className='relative group bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105'
            >
              <img src={project.image} alt={project.title} className='w-full h-48 ' />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h3 className='text-2xl font-bold text-white mb-4'>{project.title}</h3>
                <div className='flex gap-x-4'>
                  <a href={project.viewLink} target='_blank' rel='noopener noreferrer' className='font-extrabold'>View</a>
                  <a href={project.demoLink} target='_blank' rel='noopener noreferrer' className='font-extrabold '>Github</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
