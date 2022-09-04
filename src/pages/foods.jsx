import React , {useState , useEffect} from 'react'
import { motion  } from 'framer-motion'
import CommonSection from '../components/commonSection'
import { MdSearch } from 'react-icons/md'
import products from '../components/assets/fake-data/products'
import { useCartsContext } from '../context/CartContext'
import { toast } from 'react-toastify';
import { TiDelete} from 'react-icons/ti'
import { IoMdStarOutline , IoMdStar } from 'react-icons/io'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom'


const Foods = () => {
 
  const {removeFromCart, addToCart , state:{ cartItems }   } = useCartsContext()
  const [searchTerm , setSearchTerm ] = useState("")
  const [pageNumber , setPageNumber] = useState(0) 


  useEffect(() => {  
    window.scrollTo(0 , 0)
   }, []);

  const filteredItems = products.filter((food) => {
     if(searchTerm.value === "") return food ;
     if(food.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return food
   }) 
  
   const productsPerPage = 8;
   const pageVisted = productsPerPage * pageNumber

   const displayPage = filteredItems.slice( pageVisted , pageVisted + productsPerPage  )
  
  const pageCount = Math.ceil(filteredItems.length / productsPerPage )
  
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
 
  return (
    
      <motion.div
      initial={{x:'100vw'}}
      animate={{x:0}}
      exit={{x:'-100vw'}}
      transition={{type:'spring' , duration: 0.5  }}
      className='-my-2 w-["100vw"]'
      >
     <CommonSection title='All Foods'></CommonSection>
     <div className='my-2 md:flex justify-between p-5 sm:p-10 lg:px-28 w-full'>
        <div className='relative w-full md:w-auto'>
        <input type="text" name="searchTerm" value={searchTerm}  onChange={ (e) => setSearchTerm(e.target.value) } className="promo placeholder:text-black placeholder:text-xs border-2 border-t-0 p-1 text-xs rounded-md w-full md:w-auto my-2 sm:my-0" placeholder="I'm looking for ..." />
        <div className='w-6 h-6 absolute top-[40%] sm:top-1 right-2 box-border '><MdSearch /></div>
        </div>
       
        <div className=' w-full md:w-auto'>
          <select placeholder='default' className='p-2 promo rounded-md placeholder:text-black placeholder:text-xs text-xs w-full md:w-auto my-2 sm:my-0'>
          <option value="1">Default</option>
            <option value="1">Higest To Lowest</option>
            <option value="2">Lowest to Highest</option>
            <option value="3">Alphabetically A-Z</option>
          
          </select>
        </div>
     </div>
      
    
         <motion.div className='cards p-5 sm:p-10 lg:px-28 '>

         { displayPage.map(({ id, price ,image01 , title , quantity , category , rating}) => {

          const addItem = () => {
            addToCart({ id , price , title ,image01 , quantity , category})
            toast.success(`${title} added to cart!`, {
                position: toast.POSITION.TOP_RIGHT, 
          });
          }

          const remove = () => {
            toast.info("Item Removed from cart!" , { position: toast.POSITION.TOP_LEFT }) 
              return   removeFromCart({id})
          }

    return (
       <div className='flex items-center justify-center' key={id}>
         
         <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:1}}
          transition={{duration:0.5 }}
          key={id}
          className="rounded-lg flex border border-red-200 flex-col w-[180px] lg:w-[200px] h-[250px]  justify-around items-center relative hover:bg-gradient-to-r hover:from-slate-50 hover:to-red-200 hover:border-red-400 hover:border-dotted shadow-xl cursor-pointer">
       <span class="animate-ping absolute  h-4 w-4 top-0 right-0  z-10 rounded-full bg-red-400 opacity-75 mb-8"></span>
            <motion.img 
            whileHover={{scale:1.2}}
            src={image01} alt={title} className="sm:w-[90px] sm:h-[90px] w-[80px] h-[80px] object-contain py-1 "/>
            <Link to = {`/food-details/${id}`} >
            <span className='lg:text-sm text-xs text-center py-2 font-bold hover:underline'>{title}
            </span>
            </Link>
            <div className='flex text-sm text-center py-2 font-bold justify-between items-center w-full p-2 '><p className=' p-1 rounded-lg text-slate-800'>₦{price.toLocaleString()}</p> {cartItems && !cartItems.some((item) => item.id === id ) ? (<span onClick={() => {
               addItem({ id , price , title ,image01 , quantity ,category})
            }} className='text-lg px-2 rounded text-white bg-red-300  hover:bg-white hover:text-red-400' 
            >+</span>)  :(<span disabled onClick={remove} className='text-lg px-2 rounded  text-white bg-red-300  hover:bg-white hover:text-red-400' 
            ><TiDelete className='w-6 h-6' /></span>)} 
            </div>
         <div className='absolute top-0 text-slate-900 right-0 bg-gradient-to-br from-slate-50 to-red-200 font-semibold rounded-tr-lg rounded-bl-lg text-xs overflow-hidden p-1 flex '>
         { [...Array(5)].map((_ , i) => (
           <span className='flex '> {rating > i ? <IoMdStar className=' text-yellow-400' /> : <IoMdStarOutline className=' text-slate-700' />  }  </span> 
         ))
         }
          </div>
        </motion.div>
       </div>
      )}
     )
   }

         </motion.div>

      <span className='flex justify-center mt-1 mb-6 sm:-mt-2 sm:mb-12'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={changePage}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="paginationBtns"
      />
      </span>

      </motion.div>
   
    
  )
}

export default Foods