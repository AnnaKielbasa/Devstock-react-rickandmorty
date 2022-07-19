import photo from "./alain-gehri-BMxyU_Hkvs4-unsplash.jpg";
import "./AboutMe.css";

const AboutMe = ({ personDetails, logoText, setLogoText, logo, setLogo }) => {
  const { name, lastName } = personDetails;
  const handleSubmit = (e) => {
    e.preventDefault();
    logo.slice(0, 4) === "Logo"
      ? setLogo(`Logo ${logoText}`)
      : setLogo(`New Logo ${logoText}`);
    setLogoText("");
  };
  const handleChange = (e) => {
    if (e.target.value.length > 50)
      window.alert("Text shouldn't be longer than 50 characters");
    setLogoText(e.target.value);
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
            onChange={(e) => handleChange(e)}
            value={logoText}
          />
          <button type="submit">Add text to Logo</button>
        </div>
      </form>
    </div>
  );
};

export default AboutMe;
