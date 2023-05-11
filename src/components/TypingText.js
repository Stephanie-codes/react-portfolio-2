import React, { useState, useEffect } from "react";

export default function TypingText() {
  const [index, setIndex] = useState(0);
  const text = "Web Developer";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= text.length ? 0 : prevIndex + 1));
    }, 250);
    return () => clearInterval(intervalId);
  }, [text]);

  return <div id="text">{text.slice(0, index)}</div>;
}
