import photo from "./alain-gehri-BMxyU_Hkvs4-unsplash.jpg";
import "./AboutMe.css";

const AboutMe = ({ name, lastName, logoText, setLogoText, logo, setLogo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    logo.slice(0, 4) === "Logo"
      ? setLogo(`Logo ${logoText}`)
      : setLogo(`New Logo ${logoText}`);
    setLogoText("");
  };

  return (
    <div className="container">
      <img src={photo} alt="boats" />
      <span>
        Cześć, Jestem {name} {lastName}
      </span>
      <span>Uczę się programować</span>
      <form onSubmit={handleSubmit}>
        <div className="new-logo-text-container">
          <input
            type="text"
            placeholder="Type logo text..."
            onChange={(event) => setLogoText(event.target.value)}
            value={logoText}
          />
          <button type="submit">Add text to Logo</button>
        </div>
      </form>
    </div>
  );
};

export default AboutMe;
