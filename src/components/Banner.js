import React, { useEffect } from 'react';
import image from '../assets/main.png';
import { FaGithub, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });


  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, x: -100 }); // Reset to initial state when out of view
    }
  }, [inView, controls]);

  return (
    <section className='mt-24 min-h-[85vh] lg:min-h-[78vh]' id='banner'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center'>
        <motion.div
          className='flex-1 text-center lg:text-left'
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          ref={ref}
        >
          <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            SANCHIT <span>BAJAJ</span>
          </h1>
          <div className='mb-6 text-[28px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4'>I am a</span>
            <TypeAnimation
              sequence={[
                'SOFTWARE DEVELOPMENT ENGINEER', 2000,
                'BACKEND & API DEVELOPER', 2000,
                'PYTHON / FASTAPI DEVELOPER', 2000,
                'NODE.JS & MERN DEVELOPER', 2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </div>
          <p className='mb-4 max-w-xl mx-auto lg:mx-0'>
            SDE I at Infinite Locus with 1+ year of production experience building backend services and
            APIs across six enterprise platforms — Python, FastAPI and the Frappe framework powering
            ERPNext, alongside Node.js, the MERN stack, GraphQL on Saleor and event-driven pipelines on
            Apache Kafka.
          </p>
          <p className='mb-8 text-base text-white/70 max-w-xl mx-auto lg:mx-0'>
            📍 Gurugram, India &nbsp;·&nbsp; ✉️ sanchitbajaj2003@gmail.com &nbsp;·&nbsp; 📞 +91 7347204088
          </p>
          <div>
            <button className='btn btn-lg' onClick={()=>{window.open("https://drive.google.com/file/d/1LXlqUyAYp_g_pG5gqmNt0dJaRGIzPbSs/view?usp=sharing", "_blank", "noopener,noreferrer")}}>Resume</button>
          </div>
          <motion.div
            className='flex gap-x-6 max-w-max mx-auto lg:mx-8 mt-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href='https://www.youtube.com/channel/UCihD5L--fRw22jqQsFrrhkA' target='_blank' rel='noopener noreferrer'> 
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaYoutube />
              </motion.div>
            </a>
            <a href='https://github.com/sanchitbajaj123' target='_blank' rel='noopener noreferrer'> 
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub />
              </motion.div>
            </a>
            <a href='https://www.linkedin.com/in/sanchit-bajaj2003/' target='_blank' rel='noopener noreferrer'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin />
              </motion.div>
            </a>
            <a href='mailto:sanchitbajaj2003@gmail.com'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className='mt-8 lg:mt-0'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <img src={image} style={{borderRadius:"180px"}} alt='Avatar' className='w-full max-w-[500px] mx-auto' />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
