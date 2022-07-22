import { useState } from "react";
import "./App.css";
import Routing from "./Routing";

const App = () => {
  const personDetails = { name: "Anka", lastName: "Kiełbasa" };
  const [logo, setLogo] = useState("Logo");
  const [logoText, setLogoText] = useState("");

  return (
    <Routing
      personDetails={personDetails}
      logo={logo}
      setLogo={setLogo}
      logoText={logoText}
      setLogoText={setLogoText}
    />
  );
};

export default App;
