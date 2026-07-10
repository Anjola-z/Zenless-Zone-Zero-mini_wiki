import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import factions from "../Data/Factionmembers";
import characters from "../Data/CharacterInfo";
import "./Display.css";

function Display() {
  const navigate = useNavigate();
  const { id } = useParams();
  const faction = factions.find((f) => f.id === Number(id));
  const members = characters.filter((char) =>
    faction.characters.includes(char.name),
  );

  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  if (!faction) return <p>Faction not found!</p>;

  const start = page * itemsPerPage;
  const visible = members.slice(start, start + itemsPerPage);
  return (
    <div>
      <title>Faction members</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      <header className="header">
        <div className="highlight">
          <h1>{faction.name}</h1>
        </div>

        <button className="back" onClick={() => navigate("/")}>
          BACK
        </button>
      </header>

      <div className="members">
        {visible.map((char) => (
          <div
            key={char.id}
            className="member-card"
            onClick={() => navigate(`/character/${char.id}`)}
          >
            <img src={char.image} alt={char.name} />
            <div className="overlay"></div>
            <p>{char.name}</p>
          </div>
        ))}
      </div>

      <div className="controls">
        <button
          className="prev"
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
        >
          PREV
        </button>

        <button
          className="next"
          onClick={() =>
            setPage((p) =>
              (p + 1) * itemsPerPage < faction.characters.length ? p + 1 : p,
            )
          }
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Display;
