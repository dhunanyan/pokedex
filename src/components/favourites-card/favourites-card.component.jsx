import React from "react";
import {
  FavouritesCardBio,
  FavouritesCardContainer,
  FavouritesCardContent,
  FavouritesCardImg,
  FavouritesCardImgContainer,
  FavouritesCardName,
  FavouritesMainContainer,
} from "./favourites.styles";

const FavouritesCard = ({ favsItem, appColor }) => {
  const { name, weight, height, types, sprites } = favsItem;
  const imageUrl = sprites.other["official-artwork"].front_default;

  return (
    <FavouritesCardContainer>
      <FavouritesMainContainer>
        <FavouritesCardImgContainer appColor={appColor}>
          <FavouritesCardImg imageUrl={imageUrl} />
        </FavouritesCardImgContainer>
        <FavouritesCardName>{name}</FavouritesCardName>
      </FavouritesMainContainer>

      <FavouritesCardContent>
        <FavouritesCardBio>Weight: {weight}</FavouritesCardBio>
        <FavouritesCardBio>Height: {height}</FavouritesCardBio>
      </FavouritesCardContent>
    </FavouritesCardContainer>
  );
};

export default FavouritesCard;
