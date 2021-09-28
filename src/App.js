//React
import { useState, useEffect, useContext } from "react";
//Axios
import axios from "axios";
//Components
import PokeCard from "./components/PokeCard";
import Pokedex from "./components/Pokedex";
//Context
import { AllPokemonContext } from "./context/AllPokemonContext";

function App() {
  const [allPokemon, setAllPokemon] = useContext(AllPokemonContext);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemon = async () => {
    const res = await axios(loadMore);
    const data = await res.data;
    setLoadMore(data.next);
    console.log(data);

    function createObj(result) {
      result.map(async (pokemon) => {
        const res = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.data;
        setAllPokemon((currentList) => [...currentList, data]);
      });
    }
    createObj(data.results);
  };

  console.log(allPokemon);

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <Pokedex>
        {allPokemon
          .sort((a, b) => a.id - b.id)
          .map((pokemon) => (
            <PokeCard
              img={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              key={pokemon.id}
            />
          ))}
      </Pokedex>
      <button onClick={getAllPokemon}>Carica altri</button>
    </div>
  );
}

export default App;
