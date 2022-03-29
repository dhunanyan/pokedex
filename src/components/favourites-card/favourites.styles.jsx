import styled, { css } from "styled-components";

export const FavouritesCardContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: red;
  width: calc(100% - 30px);
  margin: 5px auto;
  background-color: rgba(241, 241, 241, 0.5);
  border-radius: 10px;
  overflow: hidden;
`;

export const FavouritesCardImgContainer = styled.div`
  width: 62px;
  height: 62px;
  position: relative;
  border-radius: 10px;
  background-color: ${({ appColor }) => appColor.secondary};
`;

export const FavouritesCardImg = styled.div`
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  width: 75px;
  height: 75px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FavouritesMainContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FavouritesCardName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #303030;
  padding: 16px 10px;
  border-radius: 10px;
  background-color: rgba(68, 68, 68, 1);
  color: #f1f1f1;
`;

export const FavouritesCardContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
  border-radius: 10px;
  background-color: rgba(241, 241, 241, 0.5);
  ${({ isTypes }) => (isTypes ? typesStyles : null)}
  ${({ isAbility }) => (isAbility ? abilitiesStyles : null)}
`;

const typesStyles = css`
  height: 100%;
  margin: 0 auto;
`;

const abilitiesStyles = css`
  height: 100%;
  margin: 0 auto;
`;

export const FavouritesCardBio = styled.li`
  font-size: 14px;
  font-weight: 400;
  color: #414141;
  border-radius: 5px;
  background-color: rgba(68, 68, 68, 1);
  color: #f1f1f1;
  padding: 5px;
  ${({ isTypes }) => (isTypes ? typesStyles : null)}
  ${({ isAbility }) => (isAbility ? abilitiesStyles : null)}
  background-color: ${({ appColor, isTypes, isAbility }) =>
    isTypes
      ? appColor.basic
      : isAbility
      ? appColor.secondary
      : "rgba(68, 68, 68, 1)"};
  margin: 1px;
`;

export const FavouritesButtonDelete = styled.button`
  font-size: 46px;
  padding: 5px;
  width: 66px;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(241, 241, 241, 0.5);
  color: #636363;
  transition: all 150ms ease-out;

  &:hover {
    background-color: rgba(241, 241, 241, 0.85);
    color: #303030;
  }
`;
