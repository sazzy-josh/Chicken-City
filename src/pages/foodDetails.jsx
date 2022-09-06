import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io'
import { useParams , useNavigate ,Link } from 'react-router-dom'
import products from '../components/assets/fake-data/products'
import CommonSection from '../components/commonSection'
import { useCartsContext } from '../context/CartContext'
import { toast } from 'react-toastify';
import { useAuthsContext } from '../context/authContext'
import { TiDelete} from 'react-icons/ti'


const FoodDetails = () => {
  const { User , loginState } = useAuthsContext() 
  const {  singleCheckout ,  addToCart  , state:{ cartItems } , removeFromCart  } = useCartsContext() 

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
    
    const addItem = () => {
      addToCart({ id , price , title ,image01 , quantity , category})
      // toast.success("Item Added to Cart!")
      toast.success(`${title} added to cart!`, {
         position: toast.POSITION.TOP_RIGHT, 
    });
   }

   const remove = () => {
      toast.info("Item Removed from cart!" , { position: toast.POSITION.TOP_LEFT }) 
       return   removeFromCart({id})
   }

 
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
      <div className='grid md:grid-cols-2 p-5 sm:p-10 lg:px-28 sm:h-[60vh] w-full mb-2'>
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
         (<div className='w-full flex flex-col '>
           <div className='flex flex-col gap-y-2 my-1 w-full bg-slate-200 rounded-md p-2'>
            <span className='flex  gap-y-1'>
             <div className='flex  justify-between w-full sm:w-[20vw] items-center'>
             <div className='flex gap-x-[1px]'><IoMdStar className='text-yellow-500 '/> <IoMdStar className='text-yellow-500'/><IoMdStar className='text-yellow-500'/> <IoMdStar className='text-yellow-500'/> <IoMdStar className='text-yellow-500'/></div> <div>2/04/2021</div>
             </div>
            </span>
            <div>Great meal,Highly recommend this to anyone looking to satisfy their tastebud</div>
            <div className='font-bold'>Henry Smith</div>
          </div>

          <div className='flex flex-col gap-y-2 my-1 w-full bg-slate-200 rounded-md p-2'>
            <span className='flex  gap-y-1'>
             <div className='flex  justify-between w-full sm:w-[20vw] items-center'>
             <div className='flex gap-x-[1px]'><IoMdStar className='text-yellow-500 '/> <IoMdStar className='text-yellow-500'/><IoMdStar className='text-yellow-500'/> < IoMdStarOutline /> < IoMdStarOutline /></div> <div>7/23/2022</div>
             </div>
            </span>
            <div>This is one of my favorite meal from foodcity.Trust me,you should give this a try as well</div>
            <div  className='font-bold'>Idahosa Joshua</div>
          </div>

          

          <div className='flex flex-col gap-y-2 my-1 w-full bg-slate-200 rounded-md p-2'>
            <span className='flex  gap-y-1'>
             <div className='flex  justify-between w-full sm:w-[20vw] items-center'>
             <div className='flex gap-x-[1px]'><IoMdStar className='text-yellow-500 '/> <IoMdStar className='text-yellow-500'/><IoMdStar className='text-yellow-500'/> < IoMdStarOutline /> < IoMdStarOutline /></div> <div>9/01/2022</div>
             </div>
            </span>
            <div>I think i want some more..😉😁</div>
            <div className='font-bold'>Dr Trevor O.</div>
          </div>


          <div className='flex flex-col gap-y-2 my-1 w-full bg-slate-200 rounded-md p-2'>
            <span className='flex  gap-y-1'>
             <div className='flex  justify-between w-full sm:w-[20vw] items-center'>
             <div className='flex gap-x-[1px]'><IoMdStar className='text-yellow-500 '/> <IoMdStar className='text-yellow-500'/>< IoMdStarOutline /> < IoMdStarOutline /> < IoMdStarOutline /></div> <div>9/06/2022</div>
             </div>
            </span>
            <div>Love it,but took too long before it got delivered</div>
            <div className='font-bold'>Ivan Harris</div>
          </div>

          {/* <div className='rounded-full p-2 bg-red-500 item-center flex justify-center mx-auto font-semibold my-2 text-white w-[100px] shadow-md'>See More</div> */}
          </div>)
        } </>
         </div>
         
      </div>
      
      </div>


    {/* You might also like Section */}
    <div className='w-full flex flex-col   p-5 sm:p-10 lg:px-28'>
      <h3 className='font-semibold text-md my-4'>You might also like</h3>
     <div className='flex gap-x-1 gap-y-4 sm:gap-x-6 flex-wrap'> {
    relatedProducts.map(({ id, price ,image01 , title , quantity , category})=> {
      return (
        <div className='flex items-center justify-center' key={id}>
                  
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         exit={{opacity:1}}
         transition={{duration:0.5 }}
         key={id}
         className="rounded-lg flex border border-red-200 flex-col w-[180px] h-[250px]  justify-around items-center relative hover:bg-gradient-to-r  hover:from-slate-50 hover:to-red-200 hover:border-red-400 hover:border-dotted shadow-xl cursor-pointer">
      <span class="animate-ping absolute  h-4 w-4 top-0 right-0  z-10 rounded-full bg-red-400 opacity-75"></span>
           <motion.img 
           whileHover={{scale:1.2}}
           src={image01} alt={title} className="sm:w-[90px] sm:h-[90px] w-[80px] h-[80px] object-contain py-1 "/>
           <Link to={`/food-details/${id}`}>
           <span className='lg:text-sm text-xs text-center py-2 font-bold hover:underline'>{title}</span>
           </Link>
           <div className='flex text-sm text-center py-2 font-bold justify-between items-center w-full p-2 '><p className=' p-1 rounded-lg text-slate-800'>₦{price.toLocaleString()}</p> {cartItems && !cartItems.some((item) => item.id === id ) ? (<span onClick={() => {
              addItem({ id , price , title ,image01 , quantity ,category})
           }} className='text-lg px-2 rounded text-white bg-red-300  hover:bg-white hover:text-red-400' 
           >+</span>)  :(<span disabled onClick={remove} className='text-lg px-2 rounded  text-white bg-red-300  hover:bg-white hover:text-red-400' 
           ><TiDelete className='w-6 h-6' /></span>)} 
           </div>
        <div className='absolute top-0 text-slate-900 right-0 bg-gradient-to-br from-slate-50 to-red-300 font-semibold rounded-tr-lg rounded-bl-lg text-xs overflow-hidden p-1'>10% OFF</div>
       </motion.div>
      </div>
      )
    }).slice(0,4)

     } </div>

    </div>
    </motion.div>
  )
}

export default FoodDetails