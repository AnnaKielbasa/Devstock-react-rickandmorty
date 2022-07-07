import { useEffect, useState } from "react";

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
      abc
      {characterCard && (
        <>
          {characterCard.results.map(({ image, name, species }) => (
            <div key={name}>
              <img src={image} alt="creature's img" />
              <span>Name:{name}</span>
              <span>Species: {species}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default CharactersList;
