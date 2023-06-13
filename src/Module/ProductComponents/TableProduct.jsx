import React from "react";
import TableContent from "../../Components/Content/Table";
import Product from "../Product";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/style.css'
function TableProduct() {
  return (
    <div className='blur-bg1'>
      <ToastContainer />
      <Product />
      <TableContent />
    </div>
  );
}

export default TableProduct;
