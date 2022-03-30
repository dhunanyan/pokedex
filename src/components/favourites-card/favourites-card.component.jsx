import React, { useState } from "react";

import {
  FavouritesButton,
  FavouritesCardBio,
  FavouritesCardContainer,
  FavouritesCardContent,
  FavouritesCardImg,
  FavouritesCardImgContainer,
  FavouritesCardName,
  FavouritesMainContainer,
} from "./favourites.styles";

import { BsFillTrashFill as Trash } from "react-icons/bs";
import { MdOutlineMoreHoriz as Expand } from "react-icons/md";

import { useDispatch } from "react-redux";
import { deleteFavsItemStart, removeFav } from "../../redux/favs/favs.actions";
import { CSSTransition } from "react-transition-group";
import CardDetails from "../card-details/card-details.component";

const FavouritesCard = ({ favsItem, appColor, curerntUser }) => {
  const { name, weight, height, types, sprites, abilities } = favsItem;
  const imageUrl = sprites.other["official-artwork"].front_default;
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);

  //DELETE
  const handleOnClick = async (favsItem) => {
    dispatch(removeFav(favsItem));
    dispatch(deleteFavsItemStart(curerntUser, favsItem));
  };

  return (
    <FavouritesCardContainer>
      <CSSTransition
        in={showDetails}
        timeout={250}
        classNames="details"
        unmountOnExit
      >
        <CardDetails
          pokemon={favsItem}
          name={name}
          imageUrl={imageUrl}
          types={types}
          height={height}
          weight={weight}
          appColor={appColor}
          onClick={() => setShowDetails(false)}
        />
      </CSSTransition>
      <FavouritesMainContainer>
        <FavouritesCardImgContainer appColor={appColor}>
          <FavouritesCardImg imageUrl={imageUrl} />
        </FavouritesCardImgContainer>
      </FavouritesMainContainer>
      <FavouritesCardContent>
        <FavouritesCardName>
          {name[0].toUpperCase() + name.substring(1).replace(/-/g, " ")}
        </FavouritesCardName>
      </FavouritesCardContent>

      <FavouritesCardContent>
        <FavouritesCardBio>Weight: {weight}lbs</FavouritesCardBio>
        <FavouritesCardBio>Height: {height}"</FavouritesCardBio>
      </FavouritesCardContent>

      <FavouritesCardContent isTypes={true} className="types">
        {types.length
          ? types.map((currentType, index) => (
              <FavouritesCardBio appColor={appColor} isTypes={true} key={index}>
                {currentType.type.name[0].toUpperCase() +
                  name.substring(1).replace(/-/g, " ")}
              </FavouritesCardBio>
            ))
          : null}
      </FavouritesCardContent>

      <FavouritesCardContent isAbility={true} className="types">
        {abilities.length
          ? abilities.map((currentAbility, index) => (
              <FavouritesCardBio
                appColor={appColor}
                isAbility={true}
                key={index}
              >
                {currentAbility.ability.name[0].toUpperCase() +
                  name.substring(1).replace(/-/g, " ")}
              </FavouritesCardBio>
            ))
          : null}
      </FavouritesCardContent>

      <FavouritesButton
        appColor={appColor}
        onClick={() => setShowDetails(true)}
      >
        <Expand />
      </FavouritesButton>

      <FavouritesButton
        appColor={appColor}
        onClick={() => handleOnClick(favsItem)}
      >
        <Trash />
      </FavouritesButton>
    </FavouritesCardContainer>
  );
};

export default FavouritesCard;
