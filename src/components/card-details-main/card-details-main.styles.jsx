import styled from "styled-components";

export const CardDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  width: 100%;
  background-color: #4267b2;
`;

export const CardDetailsHeader = styled.div`
  width: 100%;
  height: 70px;
  min-height: 62.69px;
  background-color: #4267b2;
  font-size: 30px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: rgba(248, 248, 248, 0.6);
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
