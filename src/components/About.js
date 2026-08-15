import React from 'react';
import img from '../assets/mid.png';

const education = [
  {
    degree: 'B.Tech, Computer Science and Engineering',
    school: 'Lovely Professional University, Jalandhar, Punjab',
    period: 'Aug 2023 – Jun 2026',
    score: 'CGPA: 7.5',
  },
  {
    degree: 'Diploma, Computer Science and Engineering',
    school: 'Mehr Chand Polytechnic College, Jalandhar, Punjab',
    period: 'Aug 2020 – Jun 2023',
    score: '78%',
  },
];

const About = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] mt-24' id='about'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center'>
        <div className='flex-1 text-center lg:text-left'>
          <img
            className='ml-0 w-full max-w-[450px] mx-auto lg:mx-0 opacity-70'
            src={img}
            alt='About Me'
          />
        </div>
        <div className='flex-1 text-center lg:text-left mt-8 lg:mt-0'>
          <h2 className='text-[36px] font-bold mb-4'>About Me</h2>
          <p className='text-lg mb-4 max-w-lg mx-auto lg:mx-0'>
            I'm a software engineer with 1+ year of production experience building backend services
            and APIs across six enterprise platforms. I work primarily in Python — FastAPI services
            and the Frappe framework powering ERPNext systems — alongside Node.js and the MERN stack,
            with GraphQL services on Saleor, event-driven pipelines on Apache Kafka, and integrations
            across Amazon SP-API, Shopify and payment gateways.
          </p>
          <p className='text-lg mb-8 max-w-lg mx-auto lg:mx-0'>
            I own features end to end — from schema design through deployment and production support —
            and I pick up unfamiliar stacks quickly.
          </p>

          <h3 className='text-[24px] font-bold mb-4 text-accent'>Education</h3>
          <div className='mb-8 max-w-lg mx-auto lg:mx-0 flex flex-col gap-y-4'>
            {education.map((item) => (
              <div key={item.degree} className='border-l-2 border-accent pl-4 text-left'>
                <h4 className='font-bold text-base leading-snug'>{item.degree}</h4>
                <p className='text-sm text-white/70 leading-snug'>{item.school}</p>
                <p className='text-sm text-white/70 leading-snug'>
                  {item.period} · {item.score}
                </p>
              </div>
            ))}
          </div>

          <a href='https://www.linkedin.com/in/sanchit-bajaj2003/' target='_blank' rel='noopener noreferrer'>
            <button className='btn btn-lg'>View My LinkedIn Profile</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
