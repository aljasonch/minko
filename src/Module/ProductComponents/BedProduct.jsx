import React from 'react';
import BedContent from '../../Components/Content/Bed';
import Product from '../Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/style.css'
function BedProduct() {
  return (
    <div className='blur-bg1'>
      <ToastContainer />
      <Product />
      <BedContent />
      <br />
      <br />
        </div>
  );
}

export default BedProduct;
