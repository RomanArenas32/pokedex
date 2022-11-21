import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/name.slice";

const InputName = () => {
  const [userName, setUsername] = useState("");

const navigate = useNavigate(); 
const dispatch = useDispatch();
  function enterName() {
    dispatch(changeName(userName))
    navigate("/pokedex") //nos llevara a Pokedex.jsx
  }
  return (
    <div className="bienvenida">
      <h1>Please, input you name</h1>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={userName}
      />
      <button onClick={enterName}>enter</button>
    </div>
  );
};

export default InputName;
