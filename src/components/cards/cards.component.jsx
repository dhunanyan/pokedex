import { useEffect, useState } from "react";

import {
  selectCardsForPreview,
  selectIsCardsFetching,
} from "../../redux/cards/cards.selectors";

import Card from "../card/card.component";
import { BeatLoader } from "react-spinners";

import {
  CardsContainer,
  CardsEmptyMessage,
  CardsLoading,
  CardsWrapper,
  CardsWrapperLoading,
  LoadButton,
  LoadButtonContainer,
  LoadButtonText,
} from "./cards.styles";

import { HiArrowSmDown as Arrow } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";

import "./cards.animations.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsStart } from "../../redux/cards/cards.actions";
import { Spinner } from "../with-spinner/with-spinner.component";
import { fetchFavsItemsStart } from "../../redux/favs/favs.actions";
import { selectFavsItemsForPreview } from "../../redux/favs/favs.selectors";
// import Loading from "../loading/loading.component";

const Cards = ({
  nameField,
  typeField,
  weightField,
  heightField,
  appColor,
  curerntUser,
}) => {
  const [pokemonsChange, setPokemonsChange] = useState(false);
  const [fetchingOffset, setFetchingOffset] = useState(0);
  const [activeInfiniteScroll, setActiveInfiniteScroll] = useState(false);
  const favsItemsMap = useSelector(selectFavsItemsForPreview);
  const favsItemsKeys = Object.keys(favsItemsMap);

  const dispatch = useDispatch();
  const pokemons = useSelector(selectCardsForPreview);
  const isCardFetching = useSelector(selectIsCardsFetching);

  useEffect(() => {
    dispatch(
      fetchCardsStart(
        `https://pokeapi.co/api/v2/pokemon?offset=${fetchingOffset}&limit=20`
      )
    );
    dispatch(fetchFavsItemsStart(curerntUser));
  }, [dispatch, fetchingOffset, curerntUser]);

  window.onscroll = () => {
    if (
      window.innerHeight >=
        document.scrollingElement.scrollHeight -
          document.documentElement.scrollTop &&
      activeInfiniteScroll
    ) {
      setFetchingOffset((setFetchingOffset) => setFetchingOffset + 8);
    }
  };

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
    <CardsWrapperLoading>
      {/* custom loading animation (big)*/}
      {/* <CardsPageLoading>
        <Loading />
      </CardsPageLoading> */}

      {/* custom loading anitmation (small) */}
      {isCardFetching && filteredPokemons.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <CardsWrapper>
            {filteredPokemons.length ? (
              <CardsContainer className="pokemons-list">
                {filteredPokemons.map((pokemon, index) => (
                  <CSSTransition
                    in={pokemonsChange}
                    appear={fetchingOffset === 20 ? true : false}
                    timeout={250}
                    classNames="pokemons"
                    unmountOnExit
                    key={pokemon.id}
                  >
                    <Card
                      favsItemsKeys={favsItemsKeys}
                      curerntUser={curerntUser}
                      pokemon={pokemon}
                      key={pokemon.id}
                      index={index}
                      appColor={appColor}
                    />
                  </CSSTransition>
                ))}
              </CardsContainer>
            ) : (
              <CardsEmptyMessage>
                No result found, try to change your searching filters or load
                more pokemons.
              </CardsEmptyMessage>
            )}
          </CardsWrapper>
          {isCardFetching ? (
            <CardsLoading>
              <BeatLoader
                color={"#303030"}
                loading={isCardFetching}
                size={15}
              />
            </CardsLoading>
          ) : (
            <LoadButtonContainer>
              <LoadButton
                onClick={() => {
                  setActiveInfiniteScroll(true);
                  setFetchingOffset(
                    (setFetchingOffset) => setFetchingOffset + 8
                  );
                  setPokemonsChange(true);
                }}
              >
                <Arrow />
                <LoadButtonText>Load more</LoadButtonText>
              </LoadButton>
            </LoadButtonContainer>
          )}
        </>
      )}
    </CardsWrapperLoading>
  );
};

export default Cards;
