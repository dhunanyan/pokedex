import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/card.component";
import FavouritesCard from "../../components/favourites-card/favourites-card.component";
import { fetchFavsItemsStart } from "../../redux/favs/favs.actions";
import {
  selectFavsItemsForPreview,
  selectIsFavsItemsFetching,
} from "../../redux/favs/favs.selectors";
import {
  FavouritesCards,
  FavouritesCardWrapperLoading,
  FavouritesContainer,
  FavouritesDisplayButton,
  FavouritesDisplayButtons,
  FavouritesEmptyMessage,
  FavouritesWrapper,
} from "./favourites.styles";

import { AiFillAppstore as Apps } from "react-icons/ai";
import { ImMenu as Bars } from "react-icons/im";
import { Spinner } from "../../components/with-spinner/with-spinner.component";

const Favourites = ({ appColor, curerntUser }) => {
  const dispatch = useDispatch();
  const favsItemsMap = useSelector(selectFavsItemsForPreview);
  const isCardFetching = useSelector(selectIsFavsItemsFetching);
  const favsItemsMapKeys = Object.keys(favsItemsMap);
  const [useBigDisplay, setUseBigDisplay] = useState(false);
  useEffect(() => {
    dispatch(fetchFavsItemsStart(curerntUser));
  }, [dispatch, curerntUser]);

  return (
    <FavouritesWrapper appColor={appColor}>
      <FavouritesContainer bigDisplay={true}>
        <FavouritesDisplayButtons>
          <FavouritesDisplayButton
            appColor={appColor}
            onClick={() => setUseBigDisplay(true)}
          >
            <Apps />
          </FavouritesDisplayButton>
          <FavouritesDisplayButton
            appColor={appColor}
            onClick={() => setUseBigDisplay(false)}
          >
            <Bars />
          </FavouritesDisplayButton>
        </FavouritesDisplayButtons>
        <FavouritesCardWrapperLoading>
          {isCardFetching ? (
            <Spinner />
          ) : favsItemsMap.length ? (
            <FavouritesCards bigDisplay={true}>
              {favsItemsMap.map((favsItem, index) =>
                useBigDisplay ? (
                  <Card
                    favsItemsIds={favsItemsMapKeys}
                    curerntUser={curerntUser}
                    pokemon={favsItem}
                    key={favsItem.id}
                    index={index}
                    appColor={appColor}
                    isInFavourites={true}
                  />
                ) : (
                  <FavouritesCard
                    favsItemsMapKeys={favsItemsMapKeys}
                    curerntUser={curerntUser}
                    key={index}
                    favsItem={favsItem}
                    appColor={appColor}
                  />
                )
              )}
            </FavouritesCards>
          ) : (
            <FavouritesEmptyMessage>
              No favourite pokemons, checkout the Home page to add some
            </FavouritesEmptyMessage>
          )}
        </FavouritesCardWrapperLoading>
      </FavouritesContainer>
    </FavouritesWrapper>
  );
};

export default Favourites;
