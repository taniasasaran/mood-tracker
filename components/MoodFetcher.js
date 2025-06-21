import React, { useContext, useEffect, useState } from "react";
import { MoodContext } from "./MoodContext";

const quotesByMood = {
  Happy: "Keep smiling, it looks good on you! 😄",
  Sad: "This too shall pass. 💙",
  Excited: "Energy is contagious—spread it! ⚡",
  Anxious: "Breathe in, breathe out. You got this. 🌬️",
  Chill: "Vibes are calm and collected. 🧘",
  Motivated: "Make today count. 🚀"
};

export default function MoodFetcher() {
  const { mood } = useContext(MoodContext);
  const [quote, setQuote] = useState("Loading...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuote(quotesByMood[mood] || "Stay positive! 🌟");
    }, 1000);
    return () => clearTimeout(timer);
  }, [mood]);

  return <div className="card"><p className="quote">{quote}</p></div>;
}
