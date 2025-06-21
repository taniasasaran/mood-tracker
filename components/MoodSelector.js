import React, { useContext, useEffect, useRef } from "react";
import { MoodContext } from "./MoodContext";

const moods = ["Happy", "Sad", "Excited", "Anxious", "Chill", "Motivated"];

export default function MoodSelector() {
  const { mood, setMood } = useContext(MoodContext);
  const changeCount = useRef(0);

  useEffect(() => {
    localStorage.setItem("mood", mood);
    changeCount.current += 1;
  }, [mood]);

  return (
    <div className="card">
      <h2>Your mood: <span className={`mood-label mood-${mood.toLowerCase()}`}>{mood}</span></h2>
      <select value={mood} onChange={(e) => setMood(e.target.value)} className="dropdown">
        {moods.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>
      <p className="small-text">You've changed your mood {changeCount.current} times.</p>
      <button className="reset-button" onClick={() => setMood("Happy")}>Reset Mood</button>
    </div>
  );
}
