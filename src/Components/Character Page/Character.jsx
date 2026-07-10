import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import characters from "../Data/CharacterInfo";
import "./Character.css";

function Character() {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = characters.find((c) => c.id === Number(id));

  if (!character) {
    return <p>Character not found.</p>;
  }
  return (
    <div>
      <title>{character.name}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      <header className="char-head">
        <button className="back" onClick={() => navigate(-1)}>
          BACK
        </button>
        <h1 className="name">{character.name}</h1>
      </header>
      <div className="character-desc">
        <div className="image">
          <img
            src={character.image}
            alt={character.name}
          />
        </div>
        <table>
            <th>Character Profile</th>
            <tr>{character.name}</tr>
            <tr>{character.class}</tr>
            <tr>{character.attribute.name}</tr>
            <tr><img src={character.attribute.image} alt={character.attribute.name} /></tr>
        </table>
      </div>
    </div>
  );
}

export default Character;
