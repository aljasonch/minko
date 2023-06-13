import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCartItem } from "../actions/cardActions";
import "./style/style.css";
import Payment from "./Payment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.card.items);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      setShowModal(false);
    }
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Please add items to your cart.");
      return;
    }

    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item));
  };

  const handleRemoveAll = () => {
    if (cartItems.length === 0) {
      toast.error("Cart is already empty!");
      return;
    }

    dispatch(removeCartItem());
    toast.success("All items removed from cart!");
  };

  const subtotal = cartItems.reduce((total, item) => total + Number(item.harga), 0);

  return (
    <div className="blur-bg2">
      <div className="py-12">
        <br />
        <br />
        <br />
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <div className="md:grid md:grid-cols-3 gap-2 ">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-medium ">Shopping Cart</h1>
                  {cartItems.length === 0 ? (
                    <p className="text-center mt-6 font-medium">Your cart is empty</p>
                  ) : (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center mt-6 pt-6"
                      >
                        <div className="flex items-center">
                          <img
                            alt=""
                            src={item.gambar}
                            width="60"
                            className="rounded-full w-[60px]"
                          />
                          <div className="flex flex-col ml-3">
                            <span className="md:text-md font-medium">{item.name}</span>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="pr-8">
                            <span className="text-xs font-medium">${item.harga}</span>
                          </div>
                          <div>
                            <i
                              className="fa fa-close text-xs font-medium"
                              onClick={() => handleRemoveItem(item)}
                            ></i>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <div className="flex items-center">
                      <a onClick={handleSubmit} href="/">
                        <i className="fa fa-arrow-left text-sm pr-2"></i>
                        <span className="text-md  font-medium text-blue-500">
                          Continue Shopping
                        </span>
                      </a>
                    </div>
                    <div className="flex justify-between items-end">
                      <button
                        onClick={handleRemoveAll}
                        className="text-sm font-medium text-red-500 hover:text-red-600 mr-2"
                      >
                        Remove All
                      </button>
                      <div className="flex items-end">
                        <span className="text-sm font-medium text-gray-400 mr-1">
                          Subtotal:
                        </span>
                        <span className="text-lg font-bold text-gray-800">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600"
              >
                Check Out
              </button>
              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                  <div className="bg-white p-8 rounded shadow-lg">
                    <Payment subtotal={subtotal} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cart;
