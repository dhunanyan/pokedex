import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 50px;
  height: 50px;
  border: 7px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #414141;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
