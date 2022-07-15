import React, { useEffect, useRef } from "react";

function CodeMessage({ body }) {
  const message = useRef();
  useEffect(() => {
    if (body) {
      message.current.className = "message fadeIn";
      setTimeout(() => {
        message.current.className = "message fadeOut";
      }, 1000);
    }
  }, [body]);

  return (
    <div ref={message} className="message">
      <div className="correct"></div>
      <code>{body}</code>
    </div>
  );
}

export default CodeMessage;
