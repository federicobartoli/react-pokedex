//React
import { useState, useEffect } from "react";
//Axios
import axios from "axios";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemon = async () => {
    const res = await axios(loadMore);
    const data = res.data;
    setLoadMore(data.next);
    console.log(data);

    function createObj(result) {
      result.map(async (pokemon) => {
        const res = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = res.data;
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
    </div>
  );
}

export default App;
