import React from "react";
import { MoodProvider } from "./components/MoodContext";
import MoodSelector from "./components/MoodSelector";
import MoodFetcher from "./components/MoodFetcher";
import MoodStats from "./components/MoodStats";
import "./components/styles.css";

export default function App() {
  return (
    <MoodProvider>
      <div className="app-container">
        <h1 className="app-title">🌈 Mood Tracker App</h1>
        <div className="card-grid">
          <MoodSelector />
          <MoodFetcher />
          <MoodStats />
        </div>
      </div>
    </MoodProvider>
  );
}
