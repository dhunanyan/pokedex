import styled from "styled-components";

export const AllPokemonsContainer = styled.div`
  padding: 70px 0 96px 0;
  width: 100%;
  background-color: ${({ appColor }) => appColor.secondary};
  overflow: hidden;
  transition: background-color 150ms ease-out;
`;
