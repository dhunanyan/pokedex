import styled from "styled-components";

export const AllPokemonsContainer = styled.div`
  padding: 70px 0 0 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ appColor }) => appColor.secondary};
  overflow: hidden;
  transition: background-color 150ms ease-out;
`;
