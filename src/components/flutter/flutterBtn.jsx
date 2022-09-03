import React from 'react'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useCartsContext } from '../../context/CartContext';

// This code is presently not in use..Button failed to recieve props 
const FlutterBtn = (props) => {
   
   const {clearCart , total , openCart } = useCartsContext()

    const config = {
        public_key: 'FLWPUBK_TEST-fcd450bbe39e4078a50213a06e5fb0a6-X',
        tx_ref: Date.now(),
        amount: total,
        currency: 'NGN',
        payment_options:'card,mobilemoney,ussd',
        customer: {
          email: props.fmail,
          phonenumber: props.tel,
          name: props.fname,
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
          closePaymentModal()
         // this will close the modal programmatically
        },
        onClose: () => {},
      };
    
      return (
         <div className='bg-yellow-400 p-2 rounded-lg text-center my-2'>
           <FlutterWaveButton {...fwConfig} /> 
         </div>
        
      );
 }
  

export default FlutterBtn