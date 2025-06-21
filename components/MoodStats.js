import React, { useContext, useMemo } from "react";
import { MoodContext } from "./MoodContext";

export default function MoodStats() {
  const { mood } = useContext(MoodContext);

  const moodScore = useMemo(() => {
    const scores = {
      Happy: 90,
      Excited: 85,
      Motivated: 95,
      Chill: 70,
      Anxious: 30,
      Sad: 20
    };
    return scores[mood] || 50;
  }, [mood]);

  return (
    <div className="card">
      <h3>Mood Score</h3>
      <p className="score">{moodScore}/100</p>
      <div className="score-bar">
        <div className="fill" style={{ width: `${moodScore}%` }}></div>
      </div>
    </div>
  );
}
