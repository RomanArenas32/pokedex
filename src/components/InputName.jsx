import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/name.slice";

export const InputName = () => {
  const [userName, setUsername] = useState("");

const navigate = useNavigate(); 
const dispatch = useDispatch();
  function enterName() {
    dispatch(changeName(userName))
    navigate("/pokedex") //nos llevara a Pokedex.jsx
  }
  return (
    <div className="inputName-contenedor">
    
     <div className="bienvenida">
      <h1>Hi! Write you name</h1>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={userName}
        className="input-texto"
      />
      <button onClick={enterName} className="btn-wave">enter</button>
    </div>
    </div>
   
  );
};

