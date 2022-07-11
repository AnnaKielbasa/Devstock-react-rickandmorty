import { useEffect, useState } from "react";
import "./CharactersList.css";

function CharactersList() {
  const [characterCard, setCharacterCard] = useState();
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacterCard(data);
      });
  }, []);

  return (
    <div>
      <h2 className="characters-header">Characters List: </h2>
      <div className="character-card-container">
        {characterCard && (
          <>
            {characterCard.results.map(({ image, name, species }) => (
              <div className="character-card" key={name}>
                <img src={image} alt="creature's img" />
                <span>Name: {name}</span>
                <span>Species: {species}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default CharactersList;
