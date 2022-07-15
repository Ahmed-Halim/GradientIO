import React, { useState } from "react";
import GradientItem from "./GradientItem";
import { HexColorPicker } from "react-colorful";

function GradientMaker({ setSelectedGradient }) {
  const [startColor, setStartColor] = useState("#11639e");
  const [endColor, setEndColor] = useState("#45f2de");

  const [isOpenStartPallete, setIsOpenStartPallete] = useState(false);
  const [isOpenEndPallete, setIsOpenEndPallete] = useState(false);

  return (
    <div
      className="wrapper"
      onClick={() => {
        setIsOpenStartPallete(false);
        setIsOpenEndPallete(false);
      }}
    >
      <GradientItem
        gradientColor={{ from: startColor, to: endColor }}
        setSelectedGradient={setSelectedGradient}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpenStartPallete(!isOpenStartPallete);
          setIsOpenEndPallete(false);
        }}
      >
        {startColor}
        <i style={{ backgroundColor: startColor }} className="color-picker"></i>
      </button>
      {" ➞ "}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpenEndPallete(!isOpenEndPallete);
          setIsOpenStartPallete(false);
        }}
      >
        {endColor}
        <i style={{ backgroundColor: endColor }} className="color-picker"></i>
      </button>
      {isOpenStartPallete && (
        <HexColorPicker
          key="startColor"
          className="color-pallete-start"
          color={startColor}
          onChange={setStartColor}
        />
      )}
      {isOpenEndPallete && (
        <HexColorPicker
          key="endColor"
          className="color-pallete-end"
          color={endColor}
          onChange={setEndColor}
        />
      )}
    </div>
  );
}

export default GradientMaker;
