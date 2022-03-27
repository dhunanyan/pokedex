import React from "react";
import { CardDetailsItems } from "../card-details-main-items/card-details-main-items.component";
import { CardDetailsStats } from "../card-details-main-stats/card-details-main-stats.component";
import {
  CardDetailsHeader,
  CardDetailsMainContainer,
  CardDetailsMainContent,
  CardDetailsMainScroll,
  CardDetailsMainTitle,
  CardDetailsStatsContainer,
} from "./card-details-main.styles";

const CardDetailsMain = ({ moves, held_items, name, statsDetails }) => {
  return (
    <CardDetailsMainContainer>
      <CardDetailsHeader>
        {name[0].toUpperCase() + name.substring(1).replace(/-/g, " ")}
      </CardDetailsHeader>

      <CardDetailsMainContent>
        <CardDetailsMainScroll>
          <CardDetailsItems
            map={held_items}
            objKey={"item"}
            name={"Held Items"}
            message={"No held items"}
          />
          <CardDetailsStatsContainer>
            <CardDetailsMainTitle>
              AFFECTING MOVES - DECREASE
            </CardDetailsMainTitle>
            {statsDetails.map((statDetails, index) => (
              <CardDetailsStats
                key={index}
                map={statDetails}
                increaseName={"name"}
                affectingKey={"move"}
                objKey={"affecting_moves"}
                moves={"affecting_moves"}
                movesType={"decrease"}
                name={(
                  statDetails.name[0].toUpperCase() +
                  statDetails.name.substring(1)
                ).replace(/-/g, " ")}
                message={`No ${statDetails.name.replace(/-/g, " ")}`}
              />
            ))}
          </CardDetailsStatsContainer>
          <CardDetailsStatsContainer>
            <CardDetailsMainTitle>
              AFFECTING MOVES - INCREASE
            </CardDetailsMainTitle>
            {statsDetails.map((statDetails, index) => (
              <CardDetailsStats
                key={index}
                map={statDetails}
                increaseName={"name"}
                affectingKey={"move"}
                objKey={"affecting_moves"}
                moves={"affecting_moves"}
                movesType={"increase"}
                name={(
                  statDetails.name[0].toUpperCase() +
                  statDetails.name.substring(1)
                ).replace(/-/g, " ")}
                message={`No ${statDetails.name.replace(/-/g, " ")}`}
              />
            ))}
          </CardDetailsStatsContainer>
          <CardDetailsStatsContainer>
            <CardDetailsMainTitle>
              AFFECTING NATURES - DECREASE
            </CardDetailsMainTitle>
            {statsDetails.map((statDetails, index) => (
              <CardDetailsStats
                key={index}
                map={statDetails}
                affectingKey={"name"}
                objKey={"affecting_natures"}
                moves={"affecting_natures"}
                movesType={"decrease"}
                name={(
                  statDetails.name[0].toUpperCase() +
                  statDetails.name.substring(1)
                ).replace(/-/g, " ")}
                message={`No ${statDetails.name.replace(/-/g, " ")}`}
              />
            ))}
          </CardDetailsStatsContainer>
          <CardDetailsStatsContainer>
            <CardDetailsMainTitle>
              AFFECTING NATURES - INCREASE
            </CardDetailsMainTitle>
            {statsDetails.map((statDetails, index) => (
              <CardDetailsStats
                key={index}
                map={statDetails}
                affectingKey={"name"}
                objKey={"affecting_natures"}
                moves={"affecting_natures"}
                movesType={"increase"}
                name={(
                  statDetails.name[0].toUpperCase() +
                  statDetails.name.substring(1)
                ).replace(/-/g, " ")}
                message={`No ${statDetails.name.replace(/-/g, " ")}`}
              />
            ))}
          </CardDetailsStatsContainer>
          <CardDetailsItems
            map={moves}
            objKey={"move"}
            name={"All moves"}
            message={"No moves"}
          />
        </CardDetailsMainScroll>
      </CardDetailsMainContent>
    </CardDetailsMainContainer>
  );
};

export default CardDetailsMain;
