import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatsStart } from "../../redux/cards/cards.actions";
import { selectStatsForPreview } from "../../redux/cards/cards.selectors";
import CardDetailsSide from "../card-details-side/card-details-side.component";
import {
  CardDetailsContainer,
  CardDetailsMainContent,
  CardDetailsFixed,
  CardDetailsHeader,
  CardDetailsLayout,
  CardDetailsMain,
  CardDetailsWrapper,
} from "./card-details.styles";

const CardDetails = ({
  name,
  types,
  height,
  weight,
  imageUrl,
  pokemon,
  onClick,
  appearDetails,
}) => {
  const { moves, sprites, stats, abilities } = pokemon;

  const dispatch = useDispatch();
  const statsDetails = useSelector(selectStatsForPreview);

  useEffect(() => {
    dispatch(fetchStatsStart());
  }, [dispatch]);

  console.log(stats);

  return (
    <CardDetailsFixed>
      <CardDetailsWrapper>
        <CardDetailsLayout onClick={onClick} />
        <CardDetailsContainer>
          <CardDetailsSide
            onClick={onClick}
            imageUrl={imageUrl}
            stats={stats}
            types={types}
            weight={weight}
            height={height}
            abilities={abilities}
          />

          <CardDetailsMain>
            <CardDetailsHeader>
              {name[0].toUpperCase() + name.substring(1)}
            </CardDetailsHeader>
            <CardDetailsMainContent>LOL</CardDetailsMainContent>
          </CardDetailsMain>
        </CardDetailsContainer>
      </CardDetailsWrapper>
    </CardDetailsFixed>
  );
};

export default CardDetails;
