import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io'
import { useParams , useNavigate } from 'react-router-dom'
import products from '../components/assets/fake-data/products'
import CommonSection from '../components/commonSection'
import { useCartsContext } from '../context/CartContext'
import { toast } from 'react-toastify';
import { useAuthsContext } from '../context/authContext'



const FoodDetails = () => {
  const { User , loginState } = useAuthsContext() 
  const {  singleCheckout ,  addToCart  , state:{ cartItems }  } = useCartsContext() 

  const navigate = useNavigate()
  const { id }= useParams()

  const handleLogin = () =>{
    loginState()
    navigate('/auth')
    toast.warning("Login to proceed to checkout")
   }

   

  const foodDetails = products.find((item) => {
    return item.id === id    
  })

   const { image01 , image02, image03, quantity , rating , price , title , desc ,  category } = foodDetails


   const getPriceForSingleCheckout = () => {
    return singleCheckout({price}) 

  }
   
    useEffect(() => {  
     window.scrollTo(0 , 0)
    }, [foodDetails]);
   
   const [ showSize  , setSize] = useState(null)
   const [ showDescription  , setShowDescription] = useState('desc')
    const [ showcaseImage  , setShowcaseImage] = useState(image01)
    const [ activeImage  , setActiveImage] = useState(1)
    
 
    const addNewItem = () => {
      const existingItem = cartItems.find((item) => item.id === id )
      if(!existingItem){
        toast.success(`${title} added to cart!`, {
          position: toast.POSITION.TOP_RIGHT })
        return  addToCart({ id , price , title ,image01 , quantity , category})
      } else{
        toast.warning(`${title} already exist in cart!`, {
          position: toast.POSITION.TOP_RIGHT })
      }

    }

    const selectSize = () => {
      toast.warning('Select size of meal', {
        position: toast.POSITION.TOP_RIGHT })
    }
       
  const relatedProducts = products.filter((item) => item.category === category   )
  console.log(relatedProducts)

  return (
    <motion.div>
   <CommonSection  title={title}></CommonSection>
      <div className='grid md:grid-cols-2 p-5 sm:p-10 lg:px-28 sm:h-[60vh] w-full'>
        {/* Image Section */}
      <div className='w-full flex justify-between mb-4'>
        <div className='w-1/6'>
         <div className='flex-col h-full gap-y-4'>
           <div className={`h-2/6 flex items-center justify-center rounded-sm w-full ${activeImage === 1 ? "border border-red-400 ": ""}`} onClick={() => {setActiveImage(1) ; setShowcaseImage(image01)}}>
            <img src={image01} alt={title} className="w-[100px] object-contain cursor-pointer"/>
           </div>
           <div className={`h-2/6 flex items-center justify-center rounded-sm w-full ${activeImage === 2 ? "border border-red-400 ": ""}`}  onClick={() =>{ setActiveImage(2) ;setShowcaseImage(image02)}}>
           <img src={image02} alt={title}  className="w-[100px] object-contain cursor-pointer"/>
           </div>
           <div className={`h-2/6 flex items-center justify-center rounded-sm w-full ${activeImage === 3 ? "border border-red-400 ": ""}`}  onClick={() => {setActiveImage(3) ; setShowcaseImage(image03)}}>
           <img src={image03} alt={title}  className="w-[100px] object-contain cursor-pointer"/>
           </div>
         </div>
        </div>

        <div className='w-4/6 flex items-center justify-center h-full  rounded-md '>
          <img src={ showcaseImage } alt='image001' className='w-[90%] h-[90%] object-contain' />
        </div>
        
      </div>

      {/* Products Details section */}
      <div className='flex flex-col gap-y-2 '>
        <h3 className='md:text-xl text-md font-bold'>{title}</h3>
        {/* <h3 className='md:text-xl text-sm font-semibold text-slate-500'>Category:{category}</h3> */}
        <span className='flex gap-x-1'>{<> 
         <strike className='md:text-lg text-sm font-semibold text-orange-700 '>₦{<>{price + 1000}</>}</strike> <p className='md:text-lg text-sm font-semibold'>₦{price.toLocaleString()}</p> 
        </>}</span>
        <p className='flex gap-x-1 items-center'>{ [...Array(5)].map((_ , i) => (
           <span className='flex items-center'> {rating > i ? <IoMdStar className=' text-yellow-400' /> : <IoMdStarOutline className=' text-slate-700' />  }  </span> 
         ))
         }<span className='text-slate-500 text-xs flex items-center'> {Math.ceil(Math.random()*50)} (users rating)</span> </p>

         <div className='flex flex-col items-center gap-x-2 text-sm my-2 underline-offset-2'>
         <div className='flex w-full gap-x-2 md:text-md text-sm'>
         <p className={`cursor-pointer  ${showDescription === 'desc' ? "description" : "" }`} onClick={() =>setShowDescription("desc")}>Description</p>  <p className={`cursor-pointer  ${showDescription === 'reviews' ? "description" : "" } `} onClick={() =>setShowDescription("reviews")} >Reviews</p>
         </div>

          <>{ 
         showDescription === "desc" ? (<div className='flex flex-col gap-x-1 py-1 mb-1 gap-y-2'>
           <p className='text-[14px] tracking-wide'>{desc}</p>
          <div className='sm:flex justify-between my-2'>
          <div>  
        <p className='font-semibold my-1  text-md'>Select size</p> 

        <div className='flex gap-y-1 sm:gap-y-0  gap-x-1 text-xs items-center'> 

        <span onClick={() => setSize("small")} className={`rounded-lg p-2 border border-slate-300 shadow-md cursor-pointer  ${showSize === 'small' ? "border-slate-600 border" : "" }`}>XS</span>
        <span  onClick={() => setSize("medium")} className={`rounded-lg p-2 border border-slate-300 shadow-md cursor-pointer ${showSize === 'medium' ? "border-slate-600 border" : "" } `}>SM</span>
        <span   onClick={() => setSize("large")} className={`rounded-lg p-2  border border-slate-300 shadow-md cursor-pointer ${showSize === 'large' ? "border-slate-600 border" : "" } `}>LG</span>
        <span   onClick={() => setSize("xlarge")} className={`rounded-lg p-2  border border-slate-300 shadow-md cursor-pointer ${showSize === 'xlarge' ? "border-slate-600 border" : "" } `}>XL</span>

         </div>
        </div>
        
          </div>
          <div className='flex gap-x-4 items-center'>
          <motion.span
          whileTap={{scale:0.8}}
          transition={{duration:0.3}}>
            {showSize ? (<>{User ? <span className='rounded-full border  text-white font-semibold bg-red-500 tracking-wider shadow-lg p-3 cursor-pointer px-12 border-red-400 hover:bg-red-400' onClick={ () => getPriceForSingleCheckout({price})}> Buy Now </span> : (<span className='rounded-full border text-white font-semibold tracking-wider bg-red-500  shadow-lg p-3 cursor-pointer px-12 border-red-400 hover:bg-red-400' onClick={ handleLogin } > Buy Now </span>)  
        }</>) : (<div className='rounded-full border  text-white font-semibold bg-red-500 tracking-wider shadow-lg p-3 cursor-pointer px-12 border-red-400 hover:bg-red-400' onClick={selectSize}> Buy Now</div>) }
        </motion.span>
           {showSize ?  (<motion.span
           whileTap={{scale:0.8}}
           transition={{duration:0.3}}
           className='rounded-full border text-red-400 font-semibold tracking-wider shadow-lg p-3 cursor-pointer px-12 border-red-400 hover:bg-red-100' onClick={ addNewItem } >Add to cart</motion.span>) : ( <motion.div
            whileTap={{scale:0.8}}
            onClick={selectSize}
            className='rounded-full border text-red-400 font-semibold tracking-wider shadow-lg p-3 cursor-pointer px-12 border-red-400 hover:bg-red-100'
           transition={{duration:0.3}}
           >Add to cart</motion.div>) 
           }
          </div>
        </div>) :
         (<div className='w-full flex'>
          
          </div>)
        } </>
         </div>
         
      </div>
      
      </div>


    </motion.div>
  )
}

export default FoodDetails