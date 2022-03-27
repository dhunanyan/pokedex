import React from "react";
import {
  CardDetailsItem,
  CardDetailsItemsContainer,
  CardDetailsItemsList,
  CardDetailsMainSubitle,
  CardDetailsNoItem,
} from "../../global.styles";

export const CardDetailsItems = ({ map, objKey, name, message }) => {
  return (
    <CardDetailsItemsContainer>
      <CardDetailsMainSubitle>{name}</CardDetailsMainSubitle>
      <CardDetailsItemsList>
        {map.length ? (
          map.map((currentItem) => (
            <CardDetailsItem>
              {currentItem[objKey].name[0].toUpperCase() +
                currentItem[objKey].name.substring(1).replace(/-/g, " ")}
            </CardDetailsItem>
          ))
        ) : (
          <CardDetailsNoItem>{message}</CardDetailsNoItem>
        )}
      </CardDetailsItemsList>
    </CardDetailsItemsContainer>
  );
};
