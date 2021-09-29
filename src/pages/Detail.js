//React
import { useEffect, useContext, useState } from "react";
//Axios
import axios from "axios";
// Routers
import { Link, useParams } from "react-router-dom";
//Loader
import Loader from "react-loader-spinner";
//Context
import { AllPokemonContext } from "../context/AllPokemonContext";
//Components
import PokeCard from "../components/PokeCard";
import InfoCard from "../components/InfoCard";
import GoBack from "../components/GoBack";

const Detail = (props) => {
  const { id } = useParams();
  const [allPokemon, setAllPokemon] = useContext(AllPokemonContext);
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  const getPokemon = async () => {
    try {
      const res = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    }
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
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Link to={"/"}>
        <GoBack />
      </Link>
      <div className={"flex-container"}>
        {pokemon.length !== 0 ? (
          <PokeCard
            catched={allPokemon.length !== 0 && allPokemon[id - 1].catched}
            hideCatched={allPokemon.length === 0 ? true : false}
            catchedHandler={catchedHandler}
            img={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            key={pokemon.id}
            id={pokemon.id}
            type={pokemon.types[0].type.name}
          >
            <InfoCard
              sprites={pokemon.sprites}
              name={pokemon.name}
              abilities={pokemon.abilities}
            />
          </PokeCard>
        ) : error === null ? (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        ) : (
          <p>{error.message}</p>
        )}
      </div>
    </>
  );
};

export default Detail;
