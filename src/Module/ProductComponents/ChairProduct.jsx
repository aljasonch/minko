import React from 'react';
import ChairContent from '../../Components/Content/Chair';
import Product from '../Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/style.css'
function ChairProduct() {
  return (
    <div className='blur-bg1'>
      <ToastContainer />
      <Product />
      <ChairContent />
      <br />
      <br />
        </div>
  );
}

export default ChairProduct;
