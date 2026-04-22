import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import {BsBriefcase,BsChatSquareText, BsClipboardData,BsAward}from 'react-icons/bs'
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="home"  
            smooth={true}  
            activeClass='active'
            spy={true} 
          >
            <BiHomeAlt size={24} />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="about"  
            smooth={true}  
            
            activeClass='active'
            spy={true} 

          >
            <BiUser size={24} />
          </Link>

          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="skills"  
            smooth={true}  
            
            activeClass='active'
            spy={true} 

          >
                        <BsClipboardData size={24} />
                        </Link> 
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="certificates"  // <-- Your certificates section id must be "certificates"
            smooth={true}  
            activeClass='active'
            spy={true}
          >
            <BsAward size={24} /> {/* Using Award Icon for Certificates */}
          </Link>


          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="work"  
            smooth={true}  
            
            activeClass='active'
            spy={true} 

          >
            <BsBriefcase size={24} />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            to="contact"  
            smooth={true}  
            activeClass='active'
            spy={true} 

          >
            <BsChatSquareText size={24} />
          </Link>


        </div>
      </div>
    </nav>
  );
};

export default Nav;
