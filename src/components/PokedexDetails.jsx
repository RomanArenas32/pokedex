import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokedexDetails = ({ url }) => {
  const [poke, setPoke] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setPoke(res.data));
  }, []);

  return (
    <Link to={`/pokedex/${poke.id}`}>
      <div className="pokeCard">
        <h3 className="name-poke">{poke.name}</h3>
        <img src={poke.sprites?.other.dream_world.front_default ? poke.sprites?.other.dream_world.front_default : poke.sprites?.front_shiny} alt="" />
      </div>
    </Link>
  );
};

export default PokedexDetails;
