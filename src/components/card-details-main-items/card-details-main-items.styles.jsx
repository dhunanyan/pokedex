import styled from "styled-components";

export const CardDetailsItemsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardDetailsItemsButtonContainer = styled.button`
  position: absolute;
  right: 4px;
  bottom: 4px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 150ms ease-out;
  background-color: #4267b2;
  width: 35px;
  height: 35px;
`;

export const CardDetailsItemsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 700;
  color: #fafae7;
  background-color: rgba(248, 248, 248, 0.5);

  transition: all 150ms ease-out;

  svg {
    transform: ${({ showMore }) => (showMore ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 800ms ease-out;
  }

  &:hover {
    background-color: #303030;
    color: #fff;
  }
`;