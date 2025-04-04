"use client";

import { useState, useEffect } from "react";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-06-01T00:00:00").getTime(); // Adjust date
    const now = new Date().getTime();
    const timeDifference = launchDate - now;

    let timeLeft = {};
    if (timeDifference > 0) {
      timeLeft = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
        seconds: Math.floor((timeDifference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">🚀 Our Website is Launching Soon!</h1>
      <p className="text-lg mb-6">Stay tuned for something amazing!</p>

      <div className="flex space-x-4 text-center text-2xl font-semibold mb-6">
        <div className="p-4 bg-white text-black rounded-lg shadow-md">
          <span className="block text-3xl">{timeLeft.days || "0"}</span> Days
        </div>
        <div className="p-4 bg-white text-black rounded-lg shadow-md">
          <span className="block text-3xl">{timeLeft.hours || "0"}</span> Hours
        </div>
        <div className="p-4 bg-white text-black rounded-lg shadow-md">
          <span className="block text-3xl">{timeLeft.minutes || "0"}</span> Minutes
        </div>
        <div className="p-4 bg-white text-black rounded-lg shadow-md">
          <span className="block text-3xl">{timeLeft.seconds || "0"}</span> Seconds
        </div>
      </div>

      <div className="bg-white text-black p-4 rounded-lg shadow-md">
        <p className="text-lg font-medium mb-2">Get Notified When We Launch</p>
        <form className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-blue-600 px-4 py-2 text-white rounded-r-lg hover:bg-blue-700">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
