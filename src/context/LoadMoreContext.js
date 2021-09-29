// React
import { createContext, useState } from "react";

export const LoadMoreContext = createContext();

const LoadMoreContextProvider = (props) => {
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  return (
    <LoadMoreContext.Provider value={[loadMore, setLoadMore]}>
      {props.children}
    </LoadMoreContext.Provider>
  );
};

export default LoadMoreContextProvider;
