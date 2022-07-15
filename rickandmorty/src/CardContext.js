import { createContext, useState } from "react";

const CardContext = createContext();
export const CardProvider = ({ children }) => {
//   let dataObject = {
//     name: "",
//     species: "",
//   };

  const [cardShade, setCardShade] = useState([]);
  const countClicks = (id, name, species) => {
    setCardShade(() => [{ name, species }]);
    
  };

  return (
    <CardContext.Provider value={{ cardShade, countClicks }}>
      {children}
    </CardContext.Provider>
  );
};
export default CardContext;
