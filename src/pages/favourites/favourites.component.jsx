import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavouritesCard from "../../components/favourites-card/favourites-card.component";
import { selectFavsItems } from "../../redux/favs/favs.selectors";
import {
  FavouritesCards,
  FavouritesContainer,
  FavouritesEmptyMessage,
  FavouritesWrapper,
} from "./favourites.styles";

const Favourites = ({ appColor }) => {
  const favsItems = useSelector(selectFavsItems);

  console.log(favsItems);

  return (
    <FavouritesWrapper appColor={appColor}>
      <FavouritesContainer>
        {favsItems.length ? (
          <FavouritesCards>
            {favsItems.map((favsItem, index) => (
              <FavouritesCard
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
