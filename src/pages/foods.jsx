import React from 'react'
import { motion } from 'framer-motion'


const Foods = () => {
  return (
    
      <motion.div
      initial={{x:'100vw'}}
      animate={{x:0}}
      exit={{x:'-100vw'}}
      transition={{type:'spring' , duration: 0.5  }}
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde animi nesciunt vel excepturi vitae. Vero aperiam distinctio repellendus beatae quidem commodi qui laudantium doloribus perferendis libero itaque similique delectus voluptas illo, iusto impedit hic molestias iste maiores magnam ipsa? Voluptatem rem fugit iusto. Ad, sit minima, aperiam quibusdam sunt recusandae, dignissimos necessitatibus perspiciatis illum praesentium accusantium quaerat harum temporibus quidem dolor? Sapiente ipsam reiciendis explicabo nisi quod? Necessitatibus tempora eos quis distinctio delectus dolores, laboriosam accusantium numquam expedita voluptas. Reprehenderit cumque corrupti voluptates animi, maiores neque perspiciatis inventore molestiae quis obcaecati numquam nihil eius provident quaerat, rerum vero consequuntur, nemo saepe illum ea laborum eos unde! Placeat, eius sunt. Molestiae non cupiditate nihil ab iste accusamus ea ad consequatur commodi dolor voluptatem quod officia beatae, excepturi sapiente laborum in voluptate sed error! Exercitationem, doloremque tempore dolorum quae, odio labore rerum, ducimus aliquid odit provident atque. Voluptatem expedita vel magnam similique perspiciatis labore ipsum omnis optio iure earum rem sapiente quidem voluptatibus odit, distinctio sequi est! Porro, modi enim veniam quos corrupti accusamus distinctio eum, voluptatum repudiandae nemo vero, ipsum velit aut quaerat optio illo molestiae assumenda dolor. Nesciunt animi ducimus, qui earum nobis unde labore voluptatum, omnis similique libero quas.</motion.div>
   
    
  )
}

export default Foods