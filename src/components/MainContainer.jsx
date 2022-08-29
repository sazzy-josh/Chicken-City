import React from 'react'
import Slider from "react-slick";
import Bike from '../components/assets/img/delivery.png'
import { BsArrowRight } from 'react-icons/bs'
import HeroBg from '../components/assets/images/heroo.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import C1 from "./assets/images/chicken_1.2.png"
import C2 from "./assets/images/burger_1.1.png"
import C3 from "./assets/images/fish_2.1.png"
import C4 from "./assets/images/product_2.1.png"
import C5 from "./assets/images/sandwhich_1.png"
import C6 from "./assets/images/bread_1.1.png"
import C7 from './assets/images/product_09_image_01.png'
import C8 from './assets/images/chicken_2.2.png'
import search from "./assets/svg/search.svg"
import cart from "./assets/svg/cart.svg"
import checkout from "./assets/svg/checkout.svg"
import payment from "./assets/svg/order.svg"
import C9 from './assets/images/drinks.png'


const categories = [
  {id:1 , type:"Chicken"  , image:C1},
  {id:2 , type:"Hamburger" , image :C2 },
  {id:3 , type:"Fish" ,  image : C3 },
  {id:4 , type:"Pizza" ,  image : C4},
  {id:5 , type:"Sandwich" ,  image : C5},
  {id:6 , type:"Bread" ,  image : C6},
  {id:7 , type:"Sauced Rice" ,  image : C7},
  {id:8 , type:"Chips" ,  image : C8},
  {id:9 ,type:"Drinks" , image:C9}

]



const MainContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
         
          initialSlide: 2,
          dots: false,
          speed: 1000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: false,
          speed: 1000,
          autoplaySpeed: 2500
        }
      }
    ]
  };
  return (
    <div>
        {/* Start of Main Page section */}

      <motion.main
       initial={{opacity:0 ,x:"100vw"}}
       animate={{opacity:1 , x: 0}}
       exit={{x:"-100vw"}}
       transition={{type:'spring' , stiffness:220 , duration: 0.5  }}
      className='grid md:grid-cols-2 p-5 sm:p-10 lg:px-32 gap-10 h-auto overflow-hidden screen'>
      {/* Column 1 for medium and  large screens */}
     <div className='sm:h-full relative  flex justify-center flex-col pt-4 '>
    {/* Food delivery logo section */}
       <div className='flex  items-center rounded-full text-xs p-1 px-2  justify-center text-red-500 font-semibold bg-red-200 max-w-[130px]'>
        <p>Bike Delivery</p>
        <div className='bg-white w-5 h-5 rounded-full flex justify-center items-center'>
        <img src={Bike} alt="Bike Delivery" className='w-6 h-6' />
        </div> 
       </div>

       {/* Text Content for Header*/}
       <motion.p  
       className='py-5 text-4xl lg:text-5xl font-bold md:tracking-[normal] md:py-8 lg:max-w-[500px] '> We offer the <span className='text-red-500'>Fastest Delivery </span>
        within Every City.</motion.p>

        <p className='tracking-wider text-sm box-border leading-normal lg:leading-[1.9] font-[500] max-w-[500px] text-slate-700'>
        Restaurant style Yogurt Mint Sauce is delicious dip which is quick and easy to .. This is a standard Indian mint chutney served with poppadums along with mint and lemon.
        We provide pleasure to your tastebuds 😉..
        </p>

        <div className='flex  gap-4 items-center'> 
        <motion.a
         whileHover={{scale:0.9 }}
         initial={{opacity:0.3 }}
         animate={{opacity:1 }}
         transition={{ ease: "easeInOut", duration: 0.4 }}
        className='text-white  text-bold gap-2 p-3 my-8 text-xs cursor-pointer rounded-full bg-red-500 w-[120px] shadow-lg md:max-w-[140px] max-h-[80px] border-2 border-red-200 font-bold flex justify-center items-center' href='#popular' >Order Now </motion.a>
         
         <Link to='/foods'>
        <motion.p 
         whileHover={{scale:0.9 ,  }}
         initial={{opacity:0.3  }}
         animate={{opacity:1  }}
         transition={{ duration: 0.4 ,type:"spring" , stiffness:200 }}
        className='border border-red-400 text-bold gap-1 text-xs p-3 my-8 cursor-pointer rounded-full  text-red-500 w-[120px]  sm:max-w-[160px] max-h-[80px]  font-bold flex justify-center items-center hover:bg-gradient-to-t hover:from-slate-50 hover:to-red-300 shadow-lg'>All Foods <BsArrowRight className='font-bold' /></motion.p>
         </Link>
        <div className='flex justify-center text-xs items-center  p-1 font-bold text-red-700'>
        
        </div>
            

            
        </div>

          
     </div>
    
     {/* Column 2 for medium and  large screens */}
     <div className=' relative flex items-center justify-center '>
      
       <img src={HeroBg} alt="Hero-bg" className='lg:w-full w-3/4  object-cover'  />


    </div>      
    </motion.main>

    {/*Categories Section Page of Home Page */}
        
      <div className='p-5 sm:p-10 lg:px-28 flex flex-col items-center my-2'>
        <h3 className='md:text-[32px] text-[28px] font-bold text-center'> More than 2,000 Dishes To Order! </h3>
        <p className='lg:text-sm text-xs text-center text-slate-700 font-bold'>Welcome to the Biggest Network of Food Ordering and Delivery</p>


       
       <div className='w-full overflow-hidden'>
       <Slider {...settings}>
       {categories && categories.map(({id , type , image}) => {
        return (
          <div className='slider'>
           <motion.div
            initial={{opacity:0  }}
            transition={{type:"spring" , duration:1 , stiffness:400}}
            whileHover={{y:-10 }}
            whileInView={{ opacity: 1  }}
            viewport={{ once: true }}
            whileTap={{y:10 }}
            key={ id } >
      
          <div className='w-[120px] shadow-lg h-[140px] lg:w-[160px] lg:h-[210px] rounded-xl flex-col gap-y-2 flex items-center justify-center bg-gradient-to-r from-slate-200 my-8
           to-red-200 cursor-pointer hover:border border-red-300 border drop-shadow hover:bg-gradient-to-r hover:to-pink-200 hover:from-slate-50'>
           <div className='lg:w-[80px] lg:h-[80px] w-65 h-65 flex justify-center items-center rounded-full bg-white '>
           <img src={image} alt={type} className='md:w-12 md:h-12 h-10 w-10 object-contain '  /> 
           </div>
           <p className='font-bold md:text-sm text-[12px] text-center'>{type.toUpperCase()}</p>
          </div>
         
        </motion.div>
          </div>
           
          )
        })}
         </Slider>
        
       </div>
      

      </div>

      {/* How to Order Section  */}

      <div className='p-5 sm:p-10 lg:px-28'>
         <h3 className='md:text-[32px] text-[28px] font-bold text-center'>How To Order?</h3>
          <p className='lg:text-sm text-xs text-center py-2 font-bold text-slate-700'>
            Follow the steps
          </p>

         <motion.div
         initial={{ opacity:0 }}
         whileInView={{ opacity: 1  }}
         viewport={{ once: true }}
         transition={{duration:2}}
         exit={{opacity:0}}
         className='grid grid-col sm:grid-cols-2 lg:grid-cols-4 my-4'>
           <div className='flex flex-col gap-y-2 justify-center items-center'>
               <img src={search} alt="search" className='w-[100px] h-[100px] object-contain' />
               <span className='p-2 border-dotted border-2 rounded-full border-red-300 w-12 h-12 text-center font-bold'>01</span>
               <p className='font-bold text-slate-700'>Search For Meal</p>
           </div>
            
           <motion.div 
            initial={{ opacity:0 }}
            whileInView={{ opacity: 1  }}
            viewport={{ once: true }}
            transition={{duration:2 ,delay:1}}
            exit={{opacity:0}}
           className='flex flex-col gap-y-2 justify-center items-center'>
               <img src={cart} alt="search" className='w-[100px] h-[100px] object-contain' />
               <span className='p-2 border-dotted border-2 rounded-full border-red-300 w-12 h-12 text-center font-bold'>02</span>
               <p className='font-bold text-slate-700'>Add to Cart</p>
           </motion.div>

           <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity: 1  }}
            viewport={{ once: true }}
            transition={{duration:2 ,delay:2}}
            exit={{opacity:0}}
            className='flex flex-col gap-y-2 justify-center items-center'>
               <img src={checkout} alt="search" className='w-[100px] h-[100px] object-contain' />
               <span className='p-2 border-dotted border-2 rounded-full border-red-300 w-12 h-12 text-center font-bold'>03</span>
               <p className='font-bold text-slate-700'>Proceed to Checkout</p>
           </motion.div>

           <motion.div
           initial={{ opacity:0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{duration:2 ,delay:3}}
           exit={{opacity:0}}
           className='flex flex-col gap-y-2 justify-center items-center'>
               <img src={payment} alt="search" className='w-[100px] h-[100px] object-contain' />
               <span className='p-2 border-dotted border-2 rounded-full border-red-300 w-12 h-12 flex justify-center  items-center font-bold'>04</span>
               <p className='font-bold text-slate-700'>Make Payment</p>
               
           </motion.div>

         </motion.div>

         
        
      </div>

      
    </div>
  )
}

export default MainContainer