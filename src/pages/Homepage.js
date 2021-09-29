//React
import { useEffect, useState, useContext } from "react";

//Axios
import axios from "axios";
//Components
import PokeCard from "../components/PokeCard";
import Pokedex from "../components/Pokedex";
import Filter from "../components/Filter";
import Filterclasses from "../components/Filter.module.css";
//Context
import { AllPokemonContext } from "../context/AllPokemonContext";
import { LoadMoreContext } from "../context/LoadMoreContext";
function Homepage() {
  const [allPokemon, setAllPokemon] = useContext(AllPokemonContext);
  const [loadMore, setLoadMore] = useContext(LoadMoreContext);
  const [filterCatched, setFilterCatched] = useState(false);
  const [filterUnCatched, setFilterUnCatched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
  //Filter

  const options = ["All", "Catched", "Uncatched"];

  const handler = (o) => {
    options.map((option) => {
      return document
        .getElementById(option)
        .classList.remove(Filterclasses.selected);
    });
    document.getElementById(o).classList.add(Filterclasses.selected);
    if (o === "All") {
      setFilterCatched(false);
      setFilterUnCatched(false);
    }
    if (o === "Catched") {
      setFilterCatched(true);
      setFilterUnCatched(false);
    }
    if (o === "Uncatched") {
      setFilterCatched(false);
      setFilterUnCatched(true);
    }
  };

  const handleFilteredSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  //End Filter
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
      <Filter
        handleFilteredSearch={handleFilteredSearch}
        searchTerm={searchTerm}
        options={options}
        handler={handler}
      />
      <Pokedex>
        {allPokemon
          .sort((a, b) => a.id - b.id)
          .filter((pokemon) => {
            if (
              pokemon.name
                .toLowerCase()
                .replace(/\s+/g, "")
                .includes(searchTerm.toLowerCase().replace(/\s+/g, ""))
            ) {
              return pokemon;
            }
            return null;
          })
          .filter((pokemon) => {
            if (!filterCatched && !filterUnCatched) {
              return pokemon;
            } else {
              if (filterCatched && pokemon.catched) {
                return pokemon;
              }
              if (filterUnCatched && !pokemon.catched) {
                return pokemon;
              }
              return null;
            }
          })
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
      {!filterCatched && (
        <button className="loadmore" onClick={getAllPokemon}>
          Load More!
        </button>
      )}
    </div>
  );
}

export default Homepage;
