import React, { useState, useEffect } from "react";

function Payment({ subtotal }) {
  const [countdown, setCountdown] = useState(60);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setShowPaymentInfo(true);
  };

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setPaymentSuccess(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (paymentSuccess) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 6000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [paymentSuccess]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Payment</h1>
      {showPaymentInfo && (
        <div className="mb-4">
                  <h2 className="text-lg font-medium mb-2">BCA Virtual Account</h2>
                  <h3 className="text-md font-[800] mb-2 ">"PT Minko Furniture Indonesia"</h3>
          <p className="text-gray-700 mb-4">
            3998 {formData.phoneNumber}
          </p>
          <p className="text-gray-700">
            Total Price: <span className="font-bold">${subtotal.toFixed(2)}</span>
          </p>
        </div>
      )}
      {paymentSuccess ? (
        <div className="text-green-600 font-bold mb-4">Payment Successful!</div>
      ) : (
        <div>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="flex items-center mb-4">
                <p className="text-gray-700 mr-2">
                  Please complete the payment within {countdown} seconds
                </p>
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  onClick={handlePayment}
                  disabled={countdown === 0}
                >
                  I Already Paid
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Payment;
