import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/card/card.component";
import { fetchCardsStart } from "./redux/cards/cards.actions";
import { selectCardsForPreview } from "./redux/cards/cards.selectors";

const App = () => {
  const [loadMore, setLoadMore] = useState(0);

  const dispatch = useDispatch();
  const pokemons = useSelector(selectCardsForPreview("lol"));

  useEffect(() => {
    dispatch(
      fetchCardsStart(
        `https://pokeapi.co/api/v2/pokemon?limit=${20 + loadMore}`
      )
    );
  }, [loadMore]);

  return (
    <div>
      <button onClick={() => setLoadMore((loadMore) => loadMore + 4)}>
        Load more
      </button>
      <div className="cont">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
