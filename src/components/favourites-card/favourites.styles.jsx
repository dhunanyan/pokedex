import styled from "styled-components";

export const FavouritesCardContainer = styled.li`
  display: flex;
  padding: 10px;
  background-color: red;
  width: calc(100% - 30px);
  margin: 0.5px 0;
  background-color: rgba(241, 241, 241, 0.5);
  border-radius: 10px;
  overflow: hidden;
`;

export const FavouritesCardImgContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: 10px;
  background-color: ${({ appColor }) => appColor.basic};
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
  flex-direction: column;
  align-items: flex-start;
`;

export const FavouritesCardContent = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FavouritesCardName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #303030;
  margin: 5px 0 0 0;
`;
export const FavouritesCardBio = styled.li`
  font-size: 14px;
  font-weight: 400;
  color: #414141;
`;
