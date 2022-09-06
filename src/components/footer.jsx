import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import {FaLinkedin } from 'react-icons/fa'
import Logo from './assets/img/logo.png'
import {VscLocation } from 'react-icons/vsc'
import { BiPhone } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
 



const Footer = () => {
  return (

    <div className='w-full bg-slate-500 flex flex-col items-center text-sm relative bottom-0' >
      <div className='grid h-auto w-full lg:w-3/4 sm:w-full  gap-y-8 lg:gap-x-16 sm:grid-cols-2 md:grid-cols-4 text-white p-4 md:p-8'>
            {/* logo and contact goes here */}
      <div className='flex flex-col gap-y-4 md:items-center'>
        <div className='flex justify-start items-center'>
         <img src={Logo} alt="logo" className='w-12 h-12' />
         <span className='text-xl font-semibold text-white tracking-wider '><span className=' font-serif'>C</span><span className='font-serif'>i</span ><span className=' font-serif'>t</span><span className= 'font-serif'>y</span></span>
        
        </div>
       <div className='flex text-white gap-x-2'>
         <FaFacebook/>
         <a href="https://twitter.com/sazzy_io"><FaTwitter  /></a>
         <a href="https://www.instagram.com/still_doing_the_most_/"><FaInstagram /></a>
         <a href="https://www.linkedin.com/in/idahosa-joshua/"> <FaLinkedin /></a>
       </div>
      </div>
       

   {/* CONTACT LOCATION SECTION */}
      <div className='flex flex-col'>
       <h5 className='font-bold text-lg py-2'>
        Contact
       </h5>
       <div className='flex flex-col gap-y-3'>
          <div className='flex gap-x-2 items-start'>
          <VscLocation  className='mt-1'/>
          <p> F1-320 Ipaja,Garden City Road,Lagos,Nigeria</p>
          {/* //location */}
          </div>

          <div className='flex items-center gap-x-2'>

          <BiPhone />
          <p> +234-7000-0000</p>
          </div>

          <div className='flex items-center gap-x-2'>

          <MdOutlineEmail />
          <p>support@chickencity.com</p>
          </div>
          </div>  
      </div>

      <div>
       
      <h5 className='font-bold text-lg py-2'>
        Support
       </h5>
        <div className='flex flex-col gap-y-3'>
          <p>FAQ</p>
          <p>Shippings and Returns</p>
          <p>Contact us</p>
          <p>Our Partners</p>

        </div>
        


      </div>
     {/* info section */}
      <div>
        
      <h5 className='font-bold text-lg py-2'>
        Info
       </h5>
       <div className='flex flex-col gap-y-3'>
          <p>Dates</p>
          <p>Parties</p>
          <p>Birthdays</p>
          <p>Menu</p>
        </div>
      </div>

    


      </div>

      <span className='text-white text-[12px] flex justify-center py-2 text-center'> &copy; Made with 💖 by Idahosa Joshua. All right Reserved </span>

    </div>
    
  )
}

export default Footer