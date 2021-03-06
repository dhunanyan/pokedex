import styled from "styled-components";

export const CardDetailsFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900000000;
`;

export const CardDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CardDetailsLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 900000;
  background-color: rgba(48, 48, 48, 0.8);
`;

export const CardDetailsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 900001;
  display: flex;
  justify-content: space-between;
  height: 600px;
  max-width: 1300px;
  min-width: 800px;
  z-index: 900001;
  border-radius: 20px;
  overflow: hidden;
`;
