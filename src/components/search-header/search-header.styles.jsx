import styled from "styled-components";

export const SearchHeaderFixed = styled.div`
  width: calc(100% - 90px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: fixed;
  z-index: 9000122;
`;

export const SearchHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SearchHeaderContainer = styled.div`
  padding: 20px 45px;
  background-color: #4267b2;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  z-index: 100;
  height: ${({ showAdvancedSearch }) =>
    showAdvancedSearch ? "149px" : "52px"};
  transition: all 150ms ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchHeaderMain = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  transition: all 150ms ease-out;
`;

export const SearchHeaderAdvancedButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease-out;
  cursor: pointer;
  position: absolute;
  bottom: -40px;
  right: -70px;
  z-index: 9000;
`;

export const SearchHeaderAdvancedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 15px auto 0 auto;
  width: max-content;
  transition: all 150ms ease-out;
  width: 50px;
  height: 50px;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
  background-color: #e0e0e0;

  svg {
    font-size: 32px;
    color: #525252;
  }

  &:hover {
    width: 160px;
    border-radius: 10px;
    color: #f1f1f1;
    background-color: #648ad4;
    box-shadow: -6px -6px 20px rgba(122, 122, 122, 0.2);

    p {
      animation: showLoadButtonText 150ms ease-out 160ms forwards;
    }

    svg {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      transform: translate(55px, 38px);
    }
  }

  @keyframes showLoadButtonText {
    0% {
    }
    1% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SearchHeaderAdvancedButtonText = styled.p`
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 100%;
  font-weight: 500;
`;

export const SearchHeaderAdvancedIconContainer = styled.div`
  svg {
    transition: all 150ms ease-out;
    transform: ${({ showAdvancedSearch }) =>
      showAdvancedSearch ? "rotate(180deg)" : "rotate(0)"};
  }
`;

export const SearchHeaderToggle = styled.div`
  display: flex;
  width: 100%;
  background-color: #4267b2;
  max-height: 100%;
  margin: 25px 0 0 0;
  transition: all 150ms ease-out;
`;

export const SearchHeaderToggleInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  &:first-of-type {
    margin: 0 25px 0 0;
  }

  &:last-of-type {
    margin: 0 0 0 25px;
  }
`;
