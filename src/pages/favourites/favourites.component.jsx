import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavouritesCard from "../../components/favourites-card/favourites-card.component";
import { fetchFavsItemsStart } from "../../redux/favs/favs.actions";
import {
  selectFavsItems,
  selectFavsItemsForPreview,
} from "../../redux/favs/favs.selectors";
import {
  FavouritesCards,
  FavouritesContainer,
  FavouritesEmptyMessage,
  FavouritesWrapper,
} from "./favourites.styles";

const Favourites = ({ appColor, curerntUser }) => {
  const dispatch = useDispatch();
  const favsItemsMap = useSelector(selectFavsItemsForPreview);

  useEffect(() => {
    dispatch(fetchFavsItemsStart(curerntUser));
  }, [dispatch, curerntUser]);

  return (
    <FavouritesWrapper appColor={appColor}>
      <FavouritesContainer>
        {favsItemsMap.length ? (
          <FavouritesCards>
            {favsItemsMap.map((favsItem, index) => (
              <FavouritesCard
                curerntUser={curerntUser}
                key={index}
                favsItem={favsItem}
                appColor={appColor}
              ></FavouritesCard>
            ))}
          </FavouritesCards>
        ) : (
          <FavouritesEmptyMessage>
            No favourite pokemons, checkout the Home page to add some
          </FavouritesEmptyMessage>
        )}
      </FavouritesContainer>
    </FavouritesWrapper>
  );
};

export default Favourites;
