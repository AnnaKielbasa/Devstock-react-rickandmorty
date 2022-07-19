import { useState } from "react";
import "./SingleCard.css";

const SingleCard = ({ image, name, species }) => {
  const [clicked, setClicked] = useState(0);
  const countClicks = () => {
    clicked === 5 ? setClicked(0) : setClicked((prev) => prev + 1);
  };
  const changeColorShade = () => {
    if (clicked === 0) return "colorShade1";
    if (clicked === 1) return "colorShade2";
    if (clicked === 2) return "colorShade3";
    if (clicked === 3) return "colorShade4";
    if (clicked === 4) return "colorShade5";
    if (clicked === 5) return "colorShade6";
  };

  return (
    <div
      onClick={() => countClicks()}
      className={`character-card ${changeColorShade()}`}
    >
      <img src={image} alt="creature's img" />
      <span>Name: {name}</span>
      <span>Species: {species}</span>
    </div>
  );
};

export default SingleCard;
