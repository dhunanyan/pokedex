import styled from "styled-components";
import { Wrapper } from "../../global.styles";

export const SignInAndSignUpWrapper = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ appColor }) => appColor.secondary};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SignInSignAndUpContainer = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 60px);
  margin: auto;
  max-width: 1300px;
`;
