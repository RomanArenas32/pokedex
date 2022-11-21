import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokedexId = () => {
  const [pokemonUniq, setPokemonUniq] = useState({});

  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemonUniq(res.data));
  }, [id]);

  return (
    <div className="pokeCard">
      <h2 className="name-poke">{pokemonUniq.name}</h2>
      <h4>Order: {pokemonUniq.order}</h4>
      <img src={pokemonUniq.sprites?.other.dream_world.front_default ? pokemonUniq.sprites?.other.dream_world.front_default: pokemonUniq.sprites?.front_shiny} alt="" />
    </div>
  );
};

export default PokedexId;