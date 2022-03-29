import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  min-height: 100%;
  padding: 15px;
  margin: 15px;
  border-radius: 20px;
  background-color: rgba(241, 241, 241, 0.5);

  @media (max-width: 768px) {
    max-width: 768px;

    &::after {
      content: "";
      width: 100%;
      height: 4px;
      background-color: #303030;
      margin: 55px 0 0 0;
    }
  }
`;
export const SignInTitle = styled.h2`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  color: #303030;
`;

export const SignInDescr = styled.p`
  color: #303030;
`;

export const SignInButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignInButton = styled.button`
  padding: 8px 12px;
  width: max-content;
  background-color: ${({ appColor }) => appColor.basic};
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #f1f1f1;
`;
