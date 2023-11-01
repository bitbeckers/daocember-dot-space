"use client";
import React from "react";

interface BallProps {
  text: string;
  style?: React.CSSProperties;
}

const Ball = ({ text, style }: BallProps) => {
  const size = text.length * 10 > 250 ? 250 : text.length * 10; // adjust the size based on the length of the text
  const colors = ["#FF4136", "#FF851B", "#FFDC00", "#2ECC40"]; // Christmas color hex codes
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; // pick a random color from the array
  const defaultStyles = {
    width: `${size}px`,
    height: `${size}px`,
    boxShadow: `inset 0 0 5px ${randomColor}, inset 0 0 10px ${randomColor}, inset 0 0 20px ${randomColor}, 0 0 40px ${randomColor}, 0 0 50px ${randomColor}`, // add an outer glow with the random color
    borderRadius: "100%",
    overflow: "hidden",
    backdropFilter: "blur(5px)",
    textShadow: "2px 2px #ff0000",
  };
  const mergedStyles = { ...defaultStyles, ...style };
  return (
    <div
      className="inline-flex items-center justify-center px-2 text-center bg-ball"
      style={{ backgroundColor: randomColor, ...mergedStyles }}
    >
      <span className="font-bold">{text}</span>
    </div>
  );
};

export default Ball;
