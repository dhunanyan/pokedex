import styled from "styled-components";

export const CardDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  width: 100%;
  background-color: ${({ appColor }) => appColor.basic};
  transition: background-color 150ms ease-out;
`;

export const CardDetailsHeader = styled.div`
  width: 100%;
  height: 70px;
  min-height: 62.69px;
  background-color: ${({ appColor }) => appColor.basic};
  font-size: 30px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: rgba(248, 248, 248, 0.6);
  transition: background-color 150ms ease-out;
`;

export const CardDetailsMainContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafae7;
  border-top-right-radius: 20px;
  overflow: hidden;
`;

export const CardDetailsMainScroll = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const CardDetailsStatsContainer = styled.div`
  max-height: 3500px;
  width: calc(100% - 30px);
  margin: 20px 15px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fafae7;
  box-shadow: 0px 0px 40px rgba(122, 122, 122, 0.8);
`;

export const CardDetailsMainTitle = styled.h1`
  font-size: 20px;
  color: rgba(248, 248, 248, 0.7);
  font-weight: 700;
  width: calc(100% - 30px);
  padding: 20px 15px;
  background-color: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 6px 10px rgba(122, 122, 122, 0.4);
`;
