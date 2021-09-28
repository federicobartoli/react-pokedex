// React
import { createContext, useState } from "react";

export const AllPokemonContext = createContext();

const AllPokemonContextProvider = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);

  return (
    <AllPokemonContext.Provider value={[allPokemon, setAllPokemon]}>
      {props.children}
    </AllPokemonContext.Provider>
  );
};

export default AllPokemonContextProvider;
