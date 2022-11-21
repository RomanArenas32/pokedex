import { HashRouter, Routes, Route } from "react-router-dom";
import InputName from "./components/InputName";
import Pokedex from "./components/Pokedex";
import PokedexId from "./components/PokedexId";
import ProtectedRoutes from "./components/ProtectedRoutes";
import './App.css';
import Navar from "./components/Navar";
import Footer from "./components/Footer";


function App() {
  return (
    <HashRouter>
    <Navar />
      <Routes>
        <Route path="/" element={<InputName />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexId />} />
        </Route>
      </Routes>
        <Footer/>
    </HashRouter>
  
  );
}

export default App;
