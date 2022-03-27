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
  overflow: hidden;
  transition: all 250ms ease-out;
  position: relative;
  margin: 15px 15px 30px 15px;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.7);
`;

export const CardDetailsItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: ${({ showMore, name }) =>
    showMore ? (name === "All moves" ? "1400px" : "500px") : "44px"};
  transition: all 500ms linear;
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
  padding: 8px;
  margin: 0 0 8px 0;
  background-color: ${({ name }) =>
    name === "All moves" ? "lightcoral" : "#4267b2"};
`;

export const CardDetailsMainSubSubtitle = styled.h3`
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 20px;
  color: #fafae7;
  font-weight: 700;
  padding: 6px;
  background-color: #7ee081;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
