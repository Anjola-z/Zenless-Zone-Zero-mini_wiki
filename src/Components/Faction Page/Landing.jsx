import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <title>Factions</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <header className="header">
        <div className="top"></div>
        <h1>Factions</h1>
      </header>

      <div className="grid">
        <Link to="../faction/1">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Angels of Delusion\Faction_Angels_of_Delusion_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Angels of Delusion\angels-of-delusion-faction.jpeg"
              alt=""
            />
            <div className="overlay"></div>
            <p>Angels of delusion</p>
          </div>
        </Link>
        <Link to="../faction/2">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Belobog Heavy Industries\Faction_Belobog_Heavy_Industries_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Belobog Heavy Industries\belobog-faction.webp"
              alt=""
            />
            <div className="overlay"></div>
            <p>Belobog Industries</p>
          </div>
        </Link>
        <Link to="../faction/3">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Cunning Hares\Faction_Gentle_House_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Cunning Hares\cunning-faction.webp"
              alt=""
            />
            <div className="overlay"></div>
            <p>Cunning Hares</p>
          </div>
        </Link>
        <Link to="../faction/4">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Krampus\Faction_Krampus_Compliance_Authority_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Krampus\krampus-faction.webp"
              alt=""
            />
            <div className="overlay"></div>
            <p>Krampus Compliance Authority</p>
          </div>
        </Link>
        <Link to="../faction/5">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Mockingbird\Faction_Mockingbird_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Mockingbird\mockingbird-faction.png"
              alt=""
            />
            <div className="overlay"></div>
            <p>Mockingbird</p>
          </div>
        </Link>
        <Link to="../faction/6">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\NEPS\Faction_Criminal_Investigation_Special_Response_Team_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\NEPS\neps-faction.jpg"
              alt=""
            />
            <div className="overlay"></div>
            <p>Criminal Investigation Special Response Team</p>
          </div>
        </Link>
        <Link to="../faction/7">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\NEPSSSS\Faction_Metropolitan_Order_Division_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\NEPSSSS\Faction_NEPS_Icon.webp"
              alt=""
            />
            <div className="overlay"></div>
            <p>Metropolitan Order Division</p>
          </div>
        </Link>
        <Link to="../faction/8">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Obol Squad\Faction_Obol_Squad_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Obol Squad\obol-squad-faction.webp"
              alt=""
            />
            <div className="overlay"></div>
            <p>Obol Squad</p>
          </div>
        </Link>
        <Link to="../faction/9">
          {" "}
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Section 6\Faction_Hollow_Special_Operations_Section_6_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Section 6\section6-faction.png"
              alt=""
            />
            <div className="overlay"></div>
            <p>Hollow Special Operation Section 6</p>
          </div>
        </Link>
        <Link to="../faction/10">
          {" "}
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Silver Squad\Faction_Defense_Force_-_Silver_Squad_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Silver Squad\silver-squad-faction.png"
              alt=""
            />
            <div className="overlay"></div>
            <p>Defense Force- Silver Squad</p>
          </div>
        </Link>
        <Link to="../faction/11">
          {" "}
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Sons of Calydon\Faction_Sons_of_Calydon_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Sons of Calydon\sons-of-calydon-faction.jpg"
              alt=""
            />
            <div className="overlay"></div>
            <p>Sons of Calydon</p>
          </div>
        </Link>
        <Link to="../faction/12">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Spook Shack\Faction_Spook_Shack_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Spook Shack\spook-shack-faction.jpeg"
              alt=""
            />
            <div className="overlay"></div>
            <p>Spook Shack</p>
          </div>
        </Link>
        <Link to="../faction/13">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Stars of Lyra\Faction_Stars_of_Lyra_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Stars of Lyra\stars-of-lyra-faction.jpeg"
              alt=""
            />
            <div className="overlay"></div>
            <p>Stars of Lyra</p>
          </div>
        </Link>
        <Link to="../faction/14">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Victoria Housekeeping\Faction_Victoria_Housekeeping_Co._Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Victoria Housekeeping\victoria-faction.webp"
              alt=""
            />
            <div className="overlay"></div>
            <p>Victoria Housekeeping</p>
          </div>
        </Link>
        <Link to="../faction/15">
          <div className="faction-card">
            <img
              className="base"
              src="src\assets\Images\Yunkui Summit\Faction_Yunkui_Summit_Icon.webp"
              alt=""
            />
            <img
              className="hover"
              src="src\assets\Images\Yunkui Summit\yunkui-summit-faction.webp"
              alt=""
            />
            <div className="overlay"></div>
            <p>Yunkui Summit</p>
          </div>
        </Link>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default Landing;
