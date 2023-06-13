import React from 'react';
import LampContent from '../../Components/Content/Lamp';
import Product from '../Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/style.css'
function LampProduct() {
  return (
    <div className='blur-bg1'>
      <ToastContainer />
      <Product />
      <LampContent />
      <br />
      <br />
        </div>
  );
}

export default LampProduct;
