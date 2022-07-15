import { useState } from "react";
import "./SingleCard.css";

function SingleCard({ id, image, name, species }) {
  const [clicked, setClicked] = useState(0);
  const countClicks = () => {
    clicked === 5 ? setClicked(0) : setClicked((prev) => prev + 1);
  };
  const changeColorShade = () => {
    if (clicked === 0) return "colorShade1 character-card";
    if (clicked === 1) return "colorShade2 character-card";
    if (clicked === 2) return "colorShade3 character-card";
    if (clicked === 3) return "colorShade4 character-card";
    if (clicked === 4) return "colorShade5 character-card";
    if (clicked === 5) return "colorShade6 character-card";
  };

  return (
    <div onClick={() => countClicks()} className={changeColorShade()}>
      <img src={image} alt="creature's img" />
      <span>Name: {name}</span>
      <span>Species: {species}</span>
    </div>
  );
}

export default SingleCard;
