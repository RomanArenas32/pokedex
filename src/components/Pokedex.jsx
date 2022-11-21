import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokedexDetails from "./PokedexDetails";

const Pokedex = () => {
  const username = useSelector((state) => state.name);

  const [pokemon, setPokemon] = useState([]);
  const [searchBy, setSearchBy] = useState("");
  const [type, setType] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => setPokemon(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((resp) => setType(resp.data.results));
  }, []);

  const searchPokemon = () => {
    navigate(`/pokedex/${searchBy}`);
  };
  const changeType = (e) => {
    const valor = e.target.value;
    axios.get(valor).then((resp) => setPokemon(resp.data.pokemon));
  };
  return (
    <div className="pokedex">
      <div className="bienvenida">
        <h1>pokedex</h1>
        <h2>Welcome {username}</h2>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search pokemon"
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        />
        <button className="search-button" onClick={searchPokemon}>
          Search
        </button>
        <select onChange={changeType} name="" id="">
          {type.map((el) => (
            <option value={el.url} key={el.name}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
      <ul className="card">
        {pokemon.map((poke) => (
          <PokedexDetails
            url={poke.url ? poke.url : poke.pokemon.url}
            key={poke.url ? poke.url : poke.pokemon.url}
          />
        ))}
      </ul>
    </div>
  );
};
export default Pokedex;
