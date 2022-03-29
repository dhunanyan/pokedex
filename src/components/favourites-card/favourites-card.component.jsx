import React from "react";
import firebase from "firebase/compat/app";

import {
  FavouritesButtonDelete,
  FavouritesCardBio,
  FavouritesCardContainer,
  FavouritesCardContent,
  FavouritesCardImg,
  FavouritesCardImgContainer,
  FavouritesCardName,
  FavouritesMainContainer,
} from "./favourites.styles";

import { BsFillTrashFill as Trash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFav } from "../../redux/favs/favs.actions";

const FavouritesCard = ({ favsItem, appColor, curerntUser }) => {
  const { name, weight, height, types, sprites, id, abilities } = favsItem;
  const imageUrl = sprites.other["official-artwork"].front_default;

  const dispatch = useDispatch();

  //DELETE
  //did not have enough time to convert POST into SAGA
  const handleOnClick = (favsItem) => {
    dispatch(removeFav(favsItem));

    firebase
      .firestore()
      .collection("users")
      .doc(curerntUser.id)
      .collection("favs")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });
  };

  return (
    <FavouritesCardContainer>
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

      <FavouritesButtonDelete
        appColor={appColor}
        onClick={() => handleOnClick(favsItem)}
      >
        <Trash />
      </FavouritesButtonDelete>
    </FavouritesCardContainer>
  );
};

export default FavouritesCard;
