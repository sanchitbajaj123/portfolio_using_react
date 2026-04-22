import React,{useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 2 } });
    } else {
      controls.start({ opacity: 0, x: -100 }); 
    }
  }, [inView, controls]);

  return (
    <section className='py-6 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 text-center'>
            <motion.div
          initial={{ opacity: 0, x: -100 }} 
          animate={controls}
          ref={ref}
            >
              
              <h4 className='text-4xl uppercase text-accent font-extrabold mb-2 tracking-wide lg:text-9xl'>
                Get in touch
              </h4>
              <h2 className='text-2xl lg:text-6xl leading-none mb-12'>
                Let's work<br />together!
              </h2>
            </motion.div>
          </div>
          <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="1a562657-bc02-4007-bc9a-c4ada2a53918"/>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
              name='name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your email'
              name='e-mail'
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
              name='message'
            />
            <button className='btn btn-lg'>Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
