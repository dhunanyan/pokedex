import React from "react";

import { MdCatchingPokemon as LogoIcon } from "react-icons/md";
import { AiFillHeart as Heart } from "react-icons/ai";
import {
  FooterContainer,
  FooterContent,
  FooterDescr,
  FooterLogo,
  FooterLogoIcon,
  FooterLogoText,
  FooterWrapper,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo to="/pokedex">
          <FooterLogoIcon>
            <LogoIcon />
          </FooterLogoIcon>
          <FooterLogoText>Pokédex</FooterLogoText>
        </FooterLogo>

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
