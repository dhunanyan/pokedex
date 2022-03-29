import React from "react";

import {
  HeroContent,
  HeroWrapper,
  HeroTitle,
  HeroSubtitle,
  HeroLine,
  HeroContainer,
  HeroContentContainer,
} from "./hero.styles";

const Hero = ({ heroTitle, heroDescr, heroImageUrl, appColor }) => {
  console.log(heroImageUrl);
  return (
    <HeroWrapper imageUrl={heroImageUrl}>
      <HeroContainer>
        <HeroContent>
          <HeroContentContainer appColor={appColor}>
            <HeroSubtitle>
              {heroDescr}
              <HeroLine></HeroLine>
            </HeroSubtitle>
            <HeroTitle>{heroTitle}</HeroTitle>
          </HeroContentContainer>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
