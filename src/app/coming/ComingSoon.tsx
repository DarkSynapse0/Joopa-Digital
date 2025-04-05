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
    <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 class="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
      </h1>
      <p class="text-white text-lg mb-8">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
};

export default ComingSoon;
