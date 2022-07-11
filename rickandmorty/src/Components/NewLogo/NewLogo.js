import "./NewLogo.css";
function NewLogo({ logo, setLogo }) {
  return (
    <div className="newLogo-container">
      <button
        onClick={() =>
          logo === "Logo" ? setLogo("New Logo") : setLogo("Logo")
        }
      >
        Change Logo Status
      </button>
    </div>
  );
}

export default NewLogo;
