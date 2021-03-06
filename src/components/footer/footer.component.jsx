import React from "react";

import { MdCatchingPokemon as LogoIcon } from "react-icons/md";
import { AiFillHeart as Heart } from "react-icons/ai";
import {
  FooterContainer,
  FooterContent,
  FooterDescr,
  FooterItemColor,
  FooterLogo,
  FooterLogoIcon,
  FooterLogoText,
  FooterWrapper,
} from "./footer.styles";

const Footer = ({ appColor }) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterItemColor appColor={appColor}>
          <FooterLogo to="/">
            <FooterLogoIcon>
              <LogoIcon />
            </FooterLogoIcon>
            <FooterLogoText>Pokédex</FooterLogoText>
          </FooterLogo>
        </FooterItemColor>

        <FooterContent>
          <FooterDescr>All rights reserved &copy;</FooterDescr>
          <FooterDescr>
            created with{" "}
            <span>
              <Heart />
            </span>{" "}
            by Davit Hunanyan
          </FooterDescr>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
