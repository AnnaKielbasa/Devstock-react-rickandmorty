import "./NewLogo.css";
const NewLogo = (props) => {
  const { logo, setLogo } = props;
  const changeLogoStatus = () => {};
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
};

export default NewLogo;
