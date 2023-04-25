import { HashRouter, Routes, Route } from "react-router-dom";
import {InputName, Footer, Pokedex, Navar, PokedexId, ProtectedRoutes} from "./components/";
import "./App.css";


export const App = ()=> {
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
      <Footer />
    </HashRouter>
  );
}

