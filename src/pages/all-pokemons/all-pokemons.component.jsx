import React, { useEffect, useState } from "react";
import { AllPokemonsContainer } from "./all-pokemons.styles";
import Cards from "../../components/cards/cards.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCardsForPreview } from "../../redux/cards/cards.selectors";
import { fetchCardsStart } from "../../redux/cards/cards.actions";
import { SearchBox } from "../../components/search-box/search-box.component";
import SearchHeader from "../../components/search-header/search-header.component";

const AllPokemons = () => {
  const [nameField, setNameField] = useState("");
  const [typeField, setTypeField] = useState("");
  const [weightField, setWeightField] = useState({
    start: 0,
    end: Number.MAX_SAFE_INTEGER,
  });
  const [heightField, setHeightField] = useState({
    start: 0,
    end: Number.MAX_SAFE_INTEGER,
  });

  const dispatch = useDispatch();
  const pokemons = useSelector(selectCardsForPreview);

  useEffect(() => {
    dispatch(fetchCardsStart());
  }, [dispatch]);

  const handleNameChange = (event) => {
    setNameField(event.target.value);
  };

  const handleTypeChange = (event) => {
    setTypeField(event.target.value);
  };

  const handleWeightStartChange = (event) => {
    setWeightField({ ...weightField, start: event.target.value });
  };

  const handleWeightEndChange = (event) => {
    setWeightField({ ...weightField, end: event.target.value });
    console.log(event.target.value);
  };

  const handleHeightStartChange = (event) => {
    setHeightField({ ...heightField, start: event.target.value });
  };

  const handleHeightEndChange = (event) => {
    setHeightField({ ...heightField, end: event.target.value });
  };

  return (
    <AllPokemonsContainer>
      <SearchHeader
        handleNameChange={handleNameChange}
        handleTypeChange={handleTypeChange}
        handleWeightStartChange={handleWeightStartChange}
        handleWeightEndChange={handleWeightEndChange}
        handleHeightStartChange={handleHeightStartChange}
        handleHeightEndChange={handleHeightEndChange}
      />
      <Cards
        pokemons={pokemons}
        nameField={nameField}
        typeField={typeField}
        weightField={weightField}
        heightField={heightField}
        loadMore={() => dispatch(fetchCardsStart())}
      />
    </AllPokemonsContainer>
  );
};

export default AllPokemons;
