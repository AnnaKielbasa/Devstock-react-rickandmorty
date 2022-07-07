import photo from "./alain-gehri-BMxyU_Hkvs4-unsplash.jpg";
import "./AboutMe.css";
const personDetails = { name: "Anka", lastName: "Kiełbasa" };
function AboutMe({name,lastName }) {
  return (
    <div className="container">
      <img src={photo} alt="boats" />
      <span>
        Cześć, Jestem {personDetails.name} {personDetails.lastName}
      </span>
      <span>Uczę się programować</span>
    </div>
  );
}

export default AboutMe;
