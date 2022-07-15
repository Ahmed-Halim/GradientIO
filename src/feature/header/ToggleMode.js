import React, { useState, useEffect } from "react";

function ToggleMode({ nightMode, setNightMode }) {
  const [count, setCount] = useState(0);
  const [toggleMessage, setToggleMessage] = useState(false);

  const toggleMode = () => {
    setNightMode(!nightMode);
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 4) setToggleMessage("it's fun right? 👀");
    else if (count === 8) setToggleMessage("EASY, YOU'LL BREAK IT! 😂");
    else if (count === 15) setToggleMessage("Or you will break a record.. 🤷");
    else if (count === 25)
      setToggleMessage("Not sure if that record would matter tho. ✋");
    else if (count === 40)
      setToggleMessage("Maybe it's gonna get you something.. 😪");
    else if (count === 60)
      setToggleMessage("OK you can stop now, that's enough 🤦");
    else if (count === 85)
      setToggleMessage("Are you gonna waste half of your day on this? 🤡");
    else if (count === 120) setToggleMessage("DAMN IT! YOU ARE ANNOYING! 😡");
    else if (count === 170)
      setToggleMessage("Trust me, nothing's gonna happen..");
    else if (count === 250)
      setToggleMessage("You're gonna do this forever right?");
    else if (count === 350)
      setToggleMessage("I'm fine with that, Keep doing it :)");
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
