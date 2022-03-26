import styled from "styled-components";

export const CardDetailsFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900000;
`;

export const CardDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CardDetailsLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 900000;
  background-color: rgba(48, 48, 48, 0.8);
`;

export const CardDetailsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 900001;
  display: flex;
  justify-content: space-between;
  height: 600px;
  max-width: 1300px;
  min-width: 800px;
  z-index: 900001;
  border-radius: 20px;
  overflow: hidden;
`;

export const CardDetailsSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  width: 100%;
  order: 2;
  background-color: #4267b2;
  padding: 15px;
`;

export const CardDetailsImg = styled.div`
  min-width: 100%;
  height: 240px;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-color: rgba(248, 248, 248, 0.5);
  border-radius: 20px;
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
  margin: 20px 0;
`;

export const CardStat = styled.li`
  font-size: 14px;
  color: #303030;
  padding: 6px;
  border-radius: 20px;
  background-color: #f1f1f1;
  width: 135px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  position: relative;
  overflow: hidden;

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

export const CardDetailsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
  width: 100%;
`;

export const CardDetailsHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #4267b2;
`;

export const CardDetailsMainContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
