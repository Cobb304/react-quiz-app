import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Timer set");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    }
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("-100");
      setRemainingTime(pervRemainingTime => pervRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
  );
}