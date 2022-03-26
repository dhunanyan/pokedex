import React, { useEffect, useState } from "react";
import { AllPokemonsContainer } from "./all-pokemons.styles";
import Cards from "../../components/cards/cards.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCardsForPreview } from "../../redux/cards/cards.selectors";
import { fetchCardsStart } from "../../redux/cards/cards.actions";
import { SearchBox } from "../../components/search-box/search-box.component";

const AllPokemons = () => {
  const [searchField, setSearchField] = useState("");

  const dispatch = useDispatch();
  const pokemons = useSelector(selectCardsForPreview);

  useEffect(() => {
    dispatch(fetchCardsStart());
  }, [dispatch]);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <AllPokemonsContainer>
      <SearchBox
        placeholder="Search pokemons by name"
        handleChange={handleChange}
      />
      <Cards
        pokemons={pokemons}
        searchField={searchField}
        loadMore={() => dispatch(fetchCardsStart())}
      />
    </AllPokemonsContainer>
  );
};

export default AllPokemons;
