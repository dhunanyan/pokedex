import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  CardButtonFav,
  CardButtonFavHeart,
  CardButtons,
  CardContainer,
  CardContent,
  CardDetailsButton,
  CardDetailsText,
  CardId,
  CardImg,
  CardImgContainer,
  CardItem,
  CardList,
  CardTitle,
  CardWrapper,
} from "./card.styles";

import { MdOutlineMoreHoriz as Expand } from "react-icons/md";
import {
  AiFillHeart as HeartFilled,
  AiOutlineHeart as Heart,
} from "react-icons/ai";
import { BsFillTrashFill as Trash } from "react-icons/bs";

import CardDetails from "../card-details/card-details.component";
import { CSSTransition } from "react-transition-group";

import "./card.animations.scss";

import {
  addFav,
  addFavsItemStart,
  deleteFavsItemStart,
  removeFav,
} from "../../redux/favs/favs.actions";

const Card = ({
  pokemon,
  index,
  appColor,
  curerntUser,
  favsItemsIds,
  isInFavourites,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();

  const { id, name, sprites, types, height, weight } = pokemon;
  const imageUrl = sprites.other["official-artwork"].front_default;

  const minimizeName = (name) =>
    name.length > 13 ? name.slice(0, 16) + "..." : name;

  //POST FAV
  const postDataHandler = (pokemon) => {
    dispatch(addFav(pokemon));
    dispatch(addFavsItemStart(curerntUser, pokemon));
  };

  //DELETE FAV
  const handleOnClick = async (favsItem) => {
    dispatch(removeFav(favsItem));
    dispatch(deleteFavsItemStart(curerntUser, favsItem));
  };

  return (
    <CardWrapper
      className={`pokemon__${(index % 8) + 1} pokemon-grid__${(index % 4) + 1}`}
    >
      <CSSTransition
        in={showDetails}
        timeout={250}
        classNames="details"
        unmountOnExit
      >
        <CardDetails
          pokemon={pokemon}
          name={name}
          imageUrl={imageUrl}
          types={types}
          height={height}
          weight={weight}
          appColor={appColor}
          onClick={() => setShowDetails(false)}
        />
      </CSSTransition>

      <CardContainer appColor={appColor}>
        <CardId>#{id}</CardId>
        <CardImgContainer>
          <CardImg imageUrl={imageUrl} />
        </CardImgContainer>

        <CardContent>
          <CardTitle>
            {minimizeName(
              name[0].toUpperCase() + name.substring(1).replace(/-/g, " ")
            )}
          </CardTitle>
          <CardList width={"30px"} listTitle="Bio">
            <CardItem>Weight: {weight}</CardItem>
            <CardItem>Height: {height}</CardItem>
          </CardList>
          <CardList width={"30px"} listTitle="Types">
            {types.map((currentType, index) => (
              <CardItem key={index}>
                {currentType.type.name[0].toUpperCase() +
                  currentType.type.name.substring(1)}
              </CardItem>
            ))}
          </CardList>
          <CardButtons>
            {curerntUser ? (
              isInFavourites ? (
                <CardButtonFav
                  appColor={appColor}
                  onClick={() => handleOnClick(pokemon)}
                >
                  <Trash />
                </CardButtonFav>
              ) : (
                <CardButtonFav
                  appColor={appColor}
                  onClick={() => postDataHandler(pokemon)}
                >
                  <CardButtonFavHeart>
                    <Heart />
                  </CardButtonFavHeart>
                  <CardButtonFavHeart>
                    <CSSTransition
                      in={favsItemsIds.includes(pokemon.id)}
                      timeout={250}
                      classNames="heart"
                      unmountOnExit
                    >
                      {favsItemsIds.includes(pokemon.id) ? (
                        <HeartFilled />
                      ) : (
                        <Heart />
                      )}
                    </CSSTransition>
                  </CardButtonFavHeart>
                </CardButtonFav>
              )
            ) : null}
            <CardDetailsButton
              appColor={appColor}
              onClick={() => setShowDetails(true)}
            >
              <Expand />
              <CardDetailsText>More details</CardDetailsText>
            </CardDetailsButton>
          </CardButtons>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
