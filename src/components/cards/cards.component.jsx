import Card from "../card/card.component";

import {
  CardsContainer,
  CardsEmptyMessage,
  LoadButton,
  LoadButtonContainer,
  LoadButtonText,
} from "./cards.styles";
import { Wrapper } from "../../global.styles";

import { HiArrowSmDown as Arrow } from "react-icons/hi";

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

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchField.toLowerCase())
  );
  return (
    <Wrapper>
      <CardsContainer className="pokemons">
        {filteredPokemons.length ? (
          filteredPokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.id} />
          ))
        ) : (
          <CardsEmptyMessage>
            No result found, try to change your searching filters or load more
            pokemons.
          </CardsEmptyMessage>
        )}
      </CardsContainer>
      <LoadButtonContainer>
        <LoadButton onClick={loadMore}>
          <Arrow />
          <LoadButtonText>Load more</LoadButtonText>
        </LoadButton>
      </LoadButtonContainer>
    </Wrapper>
  );
};

export default Cards;
