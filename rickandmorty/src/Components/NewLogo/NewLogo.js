import "./NewLogo.css";
const NewLogo = ({ logo, setLogo }) => {
  return (
    <div className="newLogo-container">
      <button
        onClick={() =>
          logo.slice(0, 4) === "Logo" ? setLogo("New Logo") : setLogo("Logo")
        }
      >
        Change Logo Status
      </button>
    </div>
  );
};

export default NewLogo;
