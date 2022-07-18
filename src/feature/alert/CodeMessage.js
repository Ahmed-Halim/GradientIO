import React, { useEffect, useState } from "react";

function CodeMessage({ body }) {
  const [currentState, setCurrentState] = useState();
  useEffect(() => {
    if (body) {
      setCurrentState("message fadeIn");
      setTimeout(() => {
        setCurrentState("message fadeOut");
      }, 1000);
    }
  }, [body]);

  return (
    <div className={currentState}>
      <div className="correct"></div>
      <code>{body}</code>
    </div>
  );
}

export default CodeMessage;
