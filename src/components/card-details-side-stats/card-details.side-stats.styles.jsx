import styled from "styled-components";

export const CardStatsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  justify-self: flex-end;
  background-color: #303030;
  border-radius: 20px;
  padding: 2px;
  margin: 15px 0;
`;

export const CardStat = styled.li`
  font-size: 14px;
  color: #303030;
  border-radius: 20px;
  background-color: #f1f1f1;
  width: 155px;
  font-weight: 500;
  display: flex;
  margin: 5px 5px 5px 25px;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translate(-50%, -50%);
    font-size: 24px;
    z-index: 80;
    color: ${({ iconColor }) => iconColor};
  }
`;

export const CardStatOverflow = styled.div`
  width: 155px;
  height: 100%;
  padding: 6px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: -1px;
    top: 0;
    width: ${({ perc }) => `${parseInt(perc) / 1.8}%`};
    height: 100%;
    background-color: ${({ appColor }) => appColor.other};
    z-index: 0;
    transition: background-color 150ms ease-out;
  }
`;

export const CardStatTitle = styled.h3`
  font-size: 14px;
  z-index: 1;
  font-weight: 500;
`;

export const CardStatDescr = styled.h3`
  font-size: 16px;
  font-weight: 700;
  z-index: 1;
`;
