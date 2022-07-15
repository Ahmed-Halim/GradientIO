import "@fontsource/roboto-mono";
import "./App.css";
import gradientColors from "./gradientColors.json";
import { useState } from "react";
import GradientItem from "./feature/gradient/GradientItem";
import CodeMessage from "./feature/alert/CodeMessage";
import Header from "./feature/header/Header";
import GradientMaker from "./feature/gradient/GradientMaker";
import Footer from "./feature/footer/Footer";

function App() {
  const [nightMode, setNightMode] = useState(false);
  const [selectedGradient, setSelectedGradient] = useState("");

  return (
    <>
      <div className={`app${nightMode ? " night-mode" : ""}`}>
        <Header nightMode={nightMode} setNightMode={setNightMode} />
        <GradientMaker setSelectedGradient={setSelectedGradient} />
        <div className="container">
          {gradientColors.map((gradientColor, idx) => (
            <GradientItem
              key={idx}
              gradientColor={gradientColor}
              setSelectedGradient={setSelectedGradient}
            />
          ))}
        </div>
      </div>
      <CodeMessage body={selectedGradient} />

      <Footer />
    </>
  );
}

export default App;
