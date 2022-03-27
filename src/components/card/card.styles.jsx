import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 300px;
  width: 100%;
  border-radius: 20px;
  flex-grow: 100;
  overflow: hidden;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.2),
    rgba(248, 248, 248, 0.5)
  );
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  &.pokemon-grid__1 {
    grid-column: 1/2;
  }
  &.pokemon-grid__2 {
    grid-column: 2/3;
  }
  &.pokemon-grid__3 {
    grid-column: 3/4;
  }
  &.pokemon-grid__4 {
    grid-column: 4/5;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  &:hover {
    cursor: pointer;

    div:first-of-type {
      div {
        transform: scale(1.05);
      }
    }

    div:last-of-type {
      transform: translate(0, 50px);
    }

    h2 {
      background-color: #4267b2;
      color: #f1f1f1;
      border-bottom: 10px solid #303030;
    }
  }
`;

export const CardId = styled.p`
  font-size: 26px;
  font-weight: 900;
  padding: 10px;
  color: #303030;
  background-color: rgba(248, 248, 248, 0.5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 0;
  left: 20px;
  z-index: 5;
`;

export const CardImgContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease-out;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardImg = styled.div`
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  transform: scale(0.7);
  transition: all 200ms ease-out;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(224, 224, 224, 0.85);
  transform: translate(0, 230px);
  height: 270px;
  border-radius: 30px;
  overflow: hidden;
  transition: all 200ms ease-out;
  padding: 0 10px;
`;

export const CardTitle = styled.h2`
  align-self: center;
  font-size: 28px;
  font-weight: 700;
  color: #f1f1f1;
  width: 100%;
  text-align: center;
  padding: 16px;
  background-color: rgba(76, 161, 175, 0.7);
  transition: all 200ms ease-out;
  border-bottom: 10px solid #f1f1f1;
  background-color: #303030;
`;

export const CardDescr = styled.p`
  font-size: 16px;
  color: #303030;
  margin: 10px 0 0 0;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 8px 0 0 0;
  padding: 10px 8px;
  position: relative;
  border-radius: 20px;
  background-color: #eee;
  width: calc(100% - 16px);

  &::before {
    content: ${({ listTitle }) => `'${listTitle}'`};
    font-size: 14px;
    color: #f1f1f1;
    background-color: #303030;
    min-width: ${({ width }) => width};
    border-radius: 10px;
    padding: 8px;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardItem = styled.li`
  width: 100%;
  font-size: 12px;
  margin: 0 2px;
  padding: 8px;
  background: linear-gradient(
    135deg,
    rgba(241, 241, 241, 0.75),
    rgba(241, 241, 241, 0.95)
  );
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
  color: #414141;
  font-weight: 700;
  border-radius: 10px;

  span {
    margin: 2.5px 0;
  }
`;

export const CardDetailsButton = styled.button`
  margin: 10px 0 0 auto;
  padding: 5px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 35px;
  color: #f1f1f1;
  background-color: #4267b2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 150ms ease-out;
  overflow: hidden;

  @keyframes showCardDetailsText {
    0% {
    }
    1% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hideCardDetailsIcon {
    0% {
    }
    1% {
      transform: translate(100px, 0px);
    }
    100% {
      transform: translate(100px, 0px);
    }
  }

  &:hover {
    width: 150px;
    border-radius: 20px;

    p {
      animation: showLoadButtonText 150ms ease-out 160ms forwards;
    }

    svg {
      transition: all 150ms ease-out;
      animation: hideCardDetailsIcon 250ms ease-out 0ms forwards;
    }
  }
`;

export const CardDetailsText = styled.p`
  transition: all 150ms ease-out;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  opacity: 0;
  font-weight: 500;

  svg {
    transform: translate(0, 0px);
  }
`;
