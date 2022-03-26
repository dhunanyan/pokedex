import Card from "../card/card.component";

import {
  CardsAnimation,
  CardsContainer,
  CardsContainerAnimation,
  CardsEmptyMessage,
  CardsWrapper,
  LoadButton,
  LoadButtonContainer,
  LoadButtonText,
} from "./cards.styles";
import { Wrapper } from "../../global.styles";

import { HiArrowSmDown as Arrow } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { TransitionGroup } from "react-transition-group";

const Cards = ({ searchField, pokemons, loadMore }) => {
  //   .filter((card) =>
  //   (selectedType[0] !== "all"
  //     ? card.types.some(
  //         (currentType) => currentType.type.name === selectedType[0]
  //       ) === true
  //     : true) &&
  //   (selectedType[1] !== "" ? card.name.includes(selectedType[1]) : true)
  //     ? card
  //     : false
  // )
  // : []
  const [pokemonsChange, setPokemonsChange] = useState(false);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchField.toLowerCase())
  );
  return (
    <Wrapper>
      <CardsWrapper className="pokemons">
        {filteredPokemons.length ? (
          <CardsContainer className="pokemons-list">
            {filteredPokemons.map((pokemon) => (
              <CSSTransition
                in={pokemonsChange}
                timeout={250}
                classNames="pokemons"
                unmountOnExit
                key={pokemon.id}
              >
                <CardsAnimation pokemon={pokemon} />
              </CSSTransition>
            ))}
          </CardsContainer>
        ) : (
          <CardsEmptyMessage>
            No result found, try to change your searching filters or load some
            more pokemons.
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
