import styled from "styled-components";

export const CardDetailsSideContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 420px;
  width: 100%;
  order: 2;
  background-color: ${({ appColor }) => appColor.basic};
  padding: 60px 15px 15px 15px;
  transition: all 150ms ease-out;
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

export const CardDetailsExp = styled.p`
  font-size: 28px;
  border-radius: 10px;
  position: absolute;
  top: -50px;
  left: 0px;
  background-color: #7ee081;
  color: rgba(248, 248, 248, 0.7);
  padding: 5px;
  font-weight: 500;
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
