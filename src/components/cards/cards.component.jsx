import { useState } from "react";

import { selectIsCardFetching } from "../../redux/cards/cards.selectors";

import Card from "../card/card.component";

import {
  CardsContainer,
  CardsEmptyMessage,
  CardsWrapper,
  LoadButton,
  LoadButtonContainer,
  LoadButtonText,
} from "./cards.styles";
import { Wrapper } from "../../global.styles";

import { HiArrowSmDown as Arrow } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";

import "./cards.animations.scss";

const Cards = ({
  nameField,
  typeField,
  weightField,
  heightField,
  pokemons,
  loadMore,
}) => {
  const [pokemonsChange, setPokemonsChange] = useState(false);

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name.includes(nameField.toLowerCase()) &&
      pokemon.types.some((currentType) =>
        currentType.type.name.includes(typeField.toLowerCase())
      ) &&
      (weightField.end === ""
        ? true
        : pokemon.weight >= weightField.start &&
          pokemon.weight <= weightField.end) &&
      (heightField.end === ""
        ? true
        : pokemon.height >= heightField.start &&
          pokemon.height <= heightField.end)
  );

  return (
    <Wrapper>
      <CardsWrapper>
        {filteredPokemons.length ? (
          <CardsContainer className="pokemons">
            {filteredPokemons.map((pokemon) => (
              <CSSTransition
                in={pokemonsChange}
                timeout={250}
                classNames="pokemons"
                unmountOnExit
                key={pokemon.id}
              >
                <Card
                  pokemon={pokemon}
                  pokemonId={pokemon.id}
                  key={pokemon.id}
                />
              </CSSTransition>
            ))}
          </CardsContainer>
        ) : (
          <CardsEmptyMessage>
            No result found, try to change your searching filters or load more
            pokemons.
          </CardsEmptyMessage>
        )}
      </CardsWrapper>
      <LoadButtonContainer>
        <LoadButton
          onClick={() => {
            loadMore();
            setPokemonsChange(true);
          }}
        >
          <Arrow />
          <LoadButtonText>Load more</LoadButtonText>
        </LoadButton>
      </LoadButtonContainer>
    </Wrapper>
  );
};

export default Cards;
