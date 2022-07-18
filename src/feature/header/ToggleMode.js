import React, { useState, useEffect } from "react";
import toggleMessages from "./toggleMessages";

function ToggleMode({ nightMode, setNightMode }) {
  const [count, setCount] = useState(0);
  const [toggleMessage, setToggleMessage] = useState(false);

  const toggleMode = () => {
    setNightMode(!nightMode);
    setCount(count + 1);
  };

  useEffect(() => {
    const newMessage = toggleMessages.find((item) => item.clicks === count);
    if (newMessage) {
      setToggleMessage(newMessage.body);
    }
  }, [count]);

  return (
    <>
      {toggleMessage && (
        <div className="toggle-message">
          {toggleMessage}
          {<p>{count} times so far!</p>}
        </div>
      )}

      <div
        onClick={toggleMode}
        className={`toggle${nightMode ? " night" : ""}`}
      >
        <div className="notch">
          <div className="crater" />
          <div className="crater" />
        </div>
        <div>
          <div className="shape sm" />
          <div className="shape sm" />
          <div className="shape md" />
          <div className="shape lg" />
        </div>
      </div>
    </>
  );
}

export default ToggleMode;
