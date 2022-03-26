import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatsStart } from "../../redux/cards/cards.actions";
import { selectStatsForPreview } from "../../redux/cards/cards.selectors";
import {
  CardDetailsContainer,
  CardDetailsMainContent,
  CardDetailsFixed,
  CardDetailsHeader,
  CardDetailsImg,
  CardDetailsLayout,
  CardDetailsMain,
  CardDetailsSide,
  CardDetailsWrapper,
  CardDetailsSideContent,
  CardStats,
  CardStat,
  CardStatTitle,
  CardStatDescr,
} from "./card-details.styles";

const CardDetails = ({
  name,
  types,
  height,
  weight,
  imageUrl,
  pokemon,
  onClick,
}) => {
  const { moves, sprites, stats } = pokemon;

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
          <CardDetailsSide>
            <CardDetailsImg imageUrl={imageUrl} />
            <CardDetailsSideContent>
              <CardStats>
                {stats.map((currentStat, index) => (
                  <CardStat key={index}>
                    <CardStatTitle>
                      {(
                        currentStat.stat.name[0].toUpperCase() +
                        currentStat.stat.name.substring(1)
                      ).replace(/-/g, " ")}
                    </CardStatTitle>
                    <CardStatDescr>{currentStat.base_stat}</CardStatDescr>
                  </CardStat>
                ))}
              </CardStats>
            </CardDetailsSideContent>
          </CardDetailsSide>

          <CardDetailsMain>
            <CardDetailsHeader>LOL</CardDetailsHeader>
            <CardDetailsMainContent>LOL</CardDetailsMainContent>
          </CardDetailsMain>
        </CardDetailsContainer>
      </CardDetailsWrapper>
    </CardDetailsFixed>
  );
};

export default CardDetails;
