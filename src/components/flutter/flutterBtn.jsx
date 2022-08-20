import React from 'react'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useCartsContext } from '../../context/CartContext';


const FlutterBtn = () => {
   
   const {clearCart , total , openCart } = useCartsContext()

    const config = {
        public_key: 'FLWPUBK_TEST-fcd450bbe39e4078a50213a06e5fb0a6-X',
        tx_ref: Date.now(),
        amount: total * 610,
        currency: 'NGN',
        payment_options:'card,mobilemoney,ussd',
        customer: {
          email: 'idahosajoshua61@gmail.com',
          phonenumber: '07064586146',
          name: 'idahosa Joshua',
        },
        customizations: {
          title: 'Foodcity',
          description: 'Payment for items in cart',
          logo:'',
        },
      };
    
      const fwConfig = {
        ...config,
        text: 'Pay with Flutterwave!',
        callback: (response) => {
           console.log(response);
           clearCart()
           openCart()
          closePaymentModal()
         // this will close the modal programmatically
        },
        onClose: () => {},
      };
    
      return (
         <div className='bg-yellow-300 p-2 rounded-lg'>
           <FlutterWaveButton {...fwConfig} />
         </div>
        
      );
 }
  

export default FlutterBtn