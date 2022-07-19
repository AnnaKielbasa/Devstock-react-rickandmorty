import { useEffect, useState } from "react";
import "./CharactersList.css";
import SingleCard from "../SingleCard/SingleCard";

const CharactersList = () => {
  const [characterCard, setCharacterCard] = useState();
  const BASE_URL = "https://rickandmortyapi.com/api/character/?page=1";
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setCharacterCard(data))
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <div>
      <h2 className="characters-header">Characters List: </h2>
      <div className="character-card-container">
        {characterCard && (
          <>
            {characterCard.results.map(({ id, image, name, species }) => (
              <SingleCard
                key={id}
                id={id}
                image={image}
                name={name}
                species={species}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CharactersList;
