import styled from "styled-components";

export const CardAbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(224, 224, 224, 0.85);
  border-radius: 20px;
  overflow: hidden;
  transition: all 200ms ease-out;
  padding: 10px;
  width: calc(100% - 20px);

  ul {
    &:first-of-type {
      margin: 0;
    }
  }
`;
