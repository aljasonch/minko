import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/ip'); // WorldTimeAPI endpoint for current time
        const data = await response.json();
        const datetime = new Date(data.datetime);
        const timeString = datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setCurrentTime(timeString); // Extracting and formatting the time from the response
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    };

    fetchTime();

    // Update seconds every second
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex justify-center">
      <div className="opacity-50">  
              <p className='justify-center'><strong>
                  {currentTime}
              </strong>
              </p>
      </div>
    </div>
  );
};

export default Time;
