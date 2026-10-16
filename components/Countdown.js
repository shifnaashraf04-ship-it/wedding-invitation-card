"use client";

import { useEffect, useState } from "react";

function pad(value) {
  return String(value ?? 0).padStart(2, "0");
}

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const tick = () => {
      const difference = target - Date.now();

      if (difference <= 0) {
        setTimeLeft({ done: true });
        return;
      }

      setTimeLeft({
        done: false,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
      <div className="countdown" aria-live="polite">
        <div className="countdown-item">
          <div className="countdown-number">{pad(timeLeft?.days)}</div>
          <div className="countdown-label">Days</div>
        </div>

        <div className="countdown-item">
          <div className="countdown-number">{pad(timeLeft?.hours)}</div>
          <div className="countdown-label">Hours</div>
        </div>

        <div className="countdown-item">
          <div className="countdown-number">{pad(timeLeft?.minutes)}</div>
          <div className="countdown-label">Minutes</div>
        </div>

        <div className="countdown-item">
          <div className="countdown-number">{pad(timeLeft?.seconds)}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>

      <p className="countdown-message">
        {timeLeft?.done
          ? "Today is your special day! ♡"
          : "Counting down to our forever ♡"}
      </p>
    </>
  );
}
