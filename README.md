# 🌈 Mood Tracker App

A beautiful, interactive React application that helps users track and reflect on their mood. Built to demonstrate the power of **React Hooks**, **Context API**, and dynamic styling with local persistence.

<p align="center">
  <img src="https://github.com/user-attachments/assets/a3a17251-1cff-454e-9868-6e1bb2a7ea60" alt="Mood Tracker Preview" width="500"/>
</p>


---

## 🚀 Features

- 🧠 **Mood selection** from a dropdown
- 💾 **Persistence** via `localStorage`
- 📊 **Mood score** with animated progress bar
- 💬 **Dynamic motivational quotes** based on mood
- 🔁 Mood change counter using `useRef`
- 🌐 Responsive & modern UI

---

## 🔧 Tech Stack

- **React**
- **React Context API**
- **CSS Modules / Plain CSS**
- **React Hooks**: `useState`, `useEffect`, `useRef`, `useMemo`, `useContext`

---

## 🧩 Hooks Used

| Hook         | Purpose                                 |
|--------------|------------------------------------------|
| `useState`   | Managing mood and quote state            |
| `useEffect`  | Persist mood, simulate fetching quote    |
| `useRef`     | Track how many times the mood changed    |
| `useContext` | Share global mood state across components|
| `useMemo`    | Efficient mood score calculation         |

---

## 📦 Installation

Clone this repo and run it locally:

```bash
git clone https://github.com/taniasasaran/mood-tracker.git
cd mood-tracker-app
npm install
npm start
