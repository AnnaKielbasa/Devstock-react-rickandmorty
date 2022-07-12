import photo from "./alain-gehri-BMxyU_Hkvs4-unsplash.jpg";
import "./AboutMe.css";
import { useState } from "react";

const AboutMe = ({ name, lastName, logo, setLogo }) => {
  const [logoText, setLogoText] = useState("");
  const addLogoText = () => {
    const newLogo = [logo, " ", logoText];
    setLogo(newLogo);
    setLogoText("");
  };
  return (
    <div className="container">
      <img src={photo} alt="boats" />
      <span>
        Cześć, Jestem {name} {lastName}
      </span>
      <span>Uczę się programować</span>
      <div className="new-logo-text-container">
        <input
          type="text"
          placeholder="Type logo text..."
          onChange={(event) => setLogoText(event.target.value)}
          value={logoText}
        />
        <button onClick={addLogoText}>Add text to Logo</button>
      </div>
    </div>
  );
};

export default AboutMe;
