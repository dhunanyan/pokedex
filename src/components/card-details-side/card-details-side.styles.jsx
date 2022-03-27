import styled from "styled-components";

export const CardDetailsSideContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 420px;
  width: 100%;
  order: 2;
  background-color: #4267b2;
  padding: 60px 15px 15px 15px;
`;

export const CardDetailsTimes = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 10px;
  background-color: rgba(248, 248, 248, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease-out;
  transition: transform 250ms ease-out;

  svg {
    font-size: 40px;
  }

  &:hover {
    background-color: #303030;
    color: rgba(248, 248, 248, 90);
    transform: scale(1.15) rotate(180deg);
  }
`;

export const CardDetailsImgContainer = styled.div`
  min-width: 100%;
  height: 240px;
  background-color: rgba(248, 248, 248, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
`;

export const CardDetailsImg = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
`;

export const CardDetailsSideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardStats = styled.ul`
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
    background-color: rgba(66, 103, 178, 0.75);
    z-index: 0;
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

export const CardAbilities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(224, 224, 224, 0.85);
  border-radius: 20px;
  overflow: hidden;
  transition: all 200ms ease-out;
  padding: 10px;
  width: calc(100% - 20px);

  ul {
    &:first-of-type {
      margin: 0;
    }
  }
`;
