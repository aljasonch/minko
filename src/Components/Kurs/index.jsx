import React, { useState, useEffect } from 'react';

const Kurs = () => {
  const [conversionRate, setConversionRate] = useState(0);
  const [usdAmount] = useState(1);
  const [idrAmount, setIdrAmount] = useState(0);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch(
          'https://openexchangerates.org/api/latest.json?app_id=d844bcada6074f49886e357efbd003d2&base=USD'
        );
        const data = await response.json();
        const idrRate = data.rates.IDR;
        setConversionRate(idrRate);
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
      }
    };

    fetchConversionRate();
  }, []);

  useEffect(() => {
    // Perform the conversion whenever the USD amount or conversion rate changes
    setIdrAmount(usdAmount * conversionRate);
  }, [usdAmount, conversionRate]); // Include usdAmount and conversionRate in the dependency array

  return (
    <div className="p-4 text-center">
      <p className='text-lg font-bold mb-2'>Kurs USD to IDR</p>
      <p className="text-md font-[500]"> $ {usdAmount} = Rp{new Intl.NumberFormat().format(idrAmount)}</p>
    </div>
  );
};

export default Kurs;
