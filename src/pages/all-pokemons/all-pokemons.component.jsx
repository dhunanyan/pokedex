import React, { useState } from "react";

import SearchHeader from "../../components/search-header/search-header.component";
import Cards from "../../components/cards/cards.component";

import { AllPokemonsContainer } from "./all-pokemons.styles";
import Hero from "../../components/hero/hero.component";

import signInHero from "../../assets/hero.jpg";

const AllPokemons = ({ appColor }) => {
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
  };

  const handleHeightStartChange = (event) => {
    setHeightField({ ...heightField, start: event.target.value });
  };

  const handleHeightEndChange = (event) => {
    setHeightField({ ...heightField, end: event.target.value });
  };

  return (
    <AllPokemonsContainer appColor={appColor}>
      <SearchHeader
        handleNameChange={handleNameChange}
        handleTypeChange={handleTypeChange}
        handleWeightStartChange={handleWeightStartChange}
        handleWeightEndChange={handleWeightEndChange}
        handleHeightStartChange={handleHeightStartChange}
        handleHeightEndChange={handleHeightEndChange}
        appColor={appColor}
      />
      <Hero
        heroImageUrl={signInHero}
        heroTitle={"Welcome to Pokédex"}
        heroDescr={"Sign in to add pokemons to collection"}
        appColor={appColor}
      />
      <Cards
        appColor={appColor}
        nameField={nameField}
        typeField={typeField}
        weightField={weightField}
        heightField={heightField}
      />
    </AllPokemonsContainer>
  );
};

export default AllPokemons;
