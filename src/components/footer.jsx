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

    <div className='w-full bg-slate-500 flex flex-col items-center text-sm' >
      <div className='grid h-auto w-full lg:w-3/4 sm:w-full  gap-y-8 lg:gap-x-16 sm:grid-cols-2 md:grid-cols-4 text-white p-4 md:p-8'>
            {/* logo and contact goes here */}
      <div className='flex flex-col gap-y-4 md:items-center'>
        <div className='flex justify-start items-center'>
         <img src={Logo} alt="logo" className='w-12 h-12' />
         <span className='text-xl font-semibold text-white tracking-wider '><span className=' font-serif'>C</span><span className='font-serif'>i</span ><span className=' font-serif'>t</span><span className= 'font-serif'>y</span></span>
        </div>
       <div className='flex text-white gap-x-2'>
         <FaFacebook/>
         <FaTwitter />
         <FaInstagram />
         <FaLinkedin />
       </div>
      </div>
       

   {/* CONTACT LOCATION SECTION */}
      <div className='flex flex-col'>
       <h5 className='font-bold text-lg py-2'>
        Contact
       </h5>
       <div className='flex flex-col gap-y-3'>
          <div className='flex items-start gap-x-2'>
          <VscLocation />
          <p> F1-320 Jeff Heights, Woodstock ,New Brunswick,Canada</p>

          </div>

          <div className='flex items-center gap-x-2'>

          <BiPhone />
          <p> +1-234-906-5051</p>
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

      <span className='text-white text-sm flex justify-center py-2 '> &copy;2022  All right Reserved </span>

    </div>
    
  )
}

export default Footer