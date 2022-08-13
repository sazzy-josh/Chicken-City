import React from 'react'
import products from './assets/fake-data/products'
import { NavLink } from 'react-router-dom'
import breadClip from "./assets/images/bread_CLIPART.png"
import chickenClip from './assets/images/chicken_CLIPART.png'
import pizzaClip from './assets/images/pizza.png'
import Hamburger from './assets/images/hamburger.png'


const Popular = () => {
  return (
    <div className=' p-5 sm:p-10 lg:px-28'>
        <p className='md:text-[32px] text-[28px] font-bold text-center'>Popular Dishes with delivery</p>
         <p className='lg:text-sm text-xs text-center py-2 font-bold'> The most delicious and healthy dishes from our chef.You can order this meal seperately or as part of a meal plan</p>

         <div className=' bg-red-400 rounded-lg py-3 flex justify-center items-center text-xs'>
           
             <span className='flex items-center justify-center p-2'>
                All
             
             </span>
         
           
             <span  className='flex items-center justify-center p-2 gap-x-1'>
                
                <img src={pizzaClip} alt="pizza" className='w-3 h-3' />
                Pizza
             </span>
           
           
             <span  className='flex items-center justify-center p-2 gap-x-1'>
               
                <img src={breadClip} alt="bread"  className='w-3 h-3'/>
                Bread  
             </span>
          
           
             <span  className='flex items-center justify-center p-2 gap-x-1'>
                
                <img src={Hamburger} alt="burger"  className='w-3 h-3' />
                Burger
             </span>
         
         
             <span className='flex items-center justify-center p-2 gap-x-1'>
               
                <img src={chickenClip} alt="chicken"  className='w-3 h-3'/>
                Chicken
             </span>
         


         </div>
    </div>
  )
}

export default Popular