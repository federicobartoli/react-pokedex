//React
import { useEffect, useContext } from "react";

//Axios
import axios from "axios";
//Components
import PokeCard from "../components/PokeCard";
import Pokedex from "../components/Pokedex";
//Context
import { AllPokemonContext } from "../context/AllPokemonContext";
import { LoadMoreContext } from "../context/LoadMoreContext";
function Homepage() {
  const [allPokemon, setAllPokemon] = useContext(AllPokemonContext);
  const [loadMore, setLoadMore] = useContext(LoadMoreContext);

  const getAllPokemon = async () => {
    const res = await axios(loadMore);
    const data = await res.data;
    setLoadMore(data.next);
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

  const catchedHandler = (e) => {
    e.currentTarget.checked
      ? setAllPokemon((prevAllPokemon) => {
          return Object.values({
            ...prevAllPokemon,
            [e.target.name]: {
              ...prevAllPokemon[e.target.name],
              catched: true,
            },
          });
        })
      : setAllPokemon((prevAllPokemon) => {
          return Object.values({
            ...prevAllPokemon,
            [e.target.name]: {
              ...prevAllPokemon[e.target.name],
              catched: false,
            },
          });
        });
  };

  useEffect(() => {
    allPokemon.length === 0 && getAllPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Pokedex>
        {allPokemon
          .sort((a, b) => a.id - b.id)
          .map((pokemon) => (
            <PokeCard
              catched={pokemon.catched}
              catchedHandler={catchedHandler}
              img={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              key={pokemon.id}
              id={pokemon.id}
              type={pokemon.types[0].type.name}
            />
          ))}
      </Pokedex>
      <button onClick={getAllPokemon}>Carica altri</button>
    </div>
  );
}

export default Homepage;
