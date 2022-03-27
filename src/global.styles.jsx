import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  max-width: calc(1300px - 60px);
  margin: 0 auto 0 auto;
  padding: 30px;
  overflow-x: hidden;
`;

export const CardDetailsItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background-color: #e9e9d6;
  margin: 15px;
  overflow: hidden;
`;

export const CardDetailsItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardDetailsItem = styled.li`
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px;
  margin: 5px;
  color: #fafae7;
  background-color: rgba(100, 151, 253, 1);
`;

export const CardDetailsNoItem = styled.li`
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px;
  margin: 5px;
  color: #fafae7;
  background-color: #a7171a;
`;

export const CardDetailsMainSubitle = styled.h2`
  font-size: 24px;
  color: #fafae7;
  font-weight: 700;
  width: calc(100% - 16px);
  margin: 0 0 8px 0;
  padding: 8px 8px 8px 8px;
  background-color: #4267b2;
`;
