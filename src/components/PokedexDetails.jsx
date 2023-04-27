import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PokedexDetails = ({ url }) => {
  const [poke, setPoke] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setPoke(res.data));
  }, [url]);

  
  return (
    <Link to={`/pokedex/${poke.id}`}>
      <div className="pokeCard">
        <h3 className="name-poke">{poke.name}</h3>
        <img
          src={
            poke.sprites?.other.dream_world.front_default
              ? poke.sprites.other.dream_world.front_default
              : poke.sprites?.front_shiny
              ? poke.sprites.front_shiny
              : poke.sprites?.front_default
          }
          alt=""
        />
      </div>
    </Link>
  );
};
