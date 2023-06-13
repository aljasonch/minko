import React from 'react';
import MirrorContent from '../../Components/Content/Mirror';
import Product from '../Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/style.css'
function MirrorProduct() {
  return (
    <div className='blur-bg1'>
      <ToastContainer />
      <Product />
      <MirrorContent />
      <br />
      <br />
        </div>
  );
}

export default MirrorProduct;
