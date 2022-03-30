import styled from "styled-components";
import { Wrapper } from "../../global.styles";
import {
  HeaderItemColor,
  HeaderLogo,
  HeaderLogoIcon,
  HeaderLogoText,
} from "../header/header.styles";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #303030;
  color: #f1f1f1;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const FooterContainer = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  height: 100%;
`;

export const FooterItemColor = styled(HeaderItemColor)`
  margin: 0 0 10px 0;
  align-self: flex-start;
`;

export const FooterLogo = styled(HeaderLogo)`
  font-size: 18px;
`;

export const FooterLogoIcon = styled(HeaderLogoIcon)`
  font-size: 24px;
`;

export const FooterLogoText = styled(HeaderLogoText)`
  font-size: 22px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FooterDescr = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;

  span {
    color: rgba(207, 94, 96, 1);
    font-size: 20px;
    margin: 0 5px;
  }
`;
