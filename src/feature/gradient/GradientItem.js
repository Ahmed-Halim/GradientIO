import React from "react";
function GradientItem({ gradientColor, setSelectedGradient }) {
  const handleClick = () => {
    const Code = `linear-gradient(40deg, ${gradientColor.from} 0%, ${gradientColor.to} 100%)`;
    navigator.clipboard.writeText(Code);
    setSelectedGradient(Code);
  };

  return (
    <div
      onClick={handleClick}
      className="gradient-item"
      style={{
        background: `linear-gradient(40deg, ${gradientColor.from} 0%, ${gradientColor.to} 100%)`,
      }}
    >
      {gradientColor.from + " ➞ " + gradientColor.to}
    </div>
  );
}

export default GradientItem;
