import React, { createContext, useState, useEffect } from "react";

export const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [mood, setMood] = useState("Happy");

  useEffect(() => {
    const storedMood = localStorage.getItem("mood");
    if (storedMood) setMood(storedMood);
  }, []);

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
}
