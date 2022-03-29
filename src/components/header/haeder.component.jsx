import { Switch } from "@mui/material";
import React, { useState } from "react";
import { useSwitch } from "@mui/base/SwitchUnstyled";

import { MdCatchingPokemon as LogoIcon } from "react-icons/md";
import { AiFillStar as Star } from "react-icons/ai";

import colorPicker from "../../assets/color-picker.png";

import {
  HeaderColor,
  HeaderColorPicker,
  HeaderColorsList,
  HeaderContainer,
  HeaderItem,
  HeaderItemIcon,
  HeaderLink,
  HeaderList,
  HeaderLogo,
  HeaderLogoIcon,
  HeaderLogoText,
  HeaderWrapper,
} from "./header.styles";

const Header = ({
  handleChangeGreen,
  handleChangePink,
  handleChangeRed,
  checkedPink,
  checkedGreen,
  checkedRed,
  handleChangeBlack,
  checkedBlack,
  headerColors,
}) => {
  const [showColors, setShowColors] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <HeaderLogoIcon>
            <LogoIcon />
          </HeaderLogoIcon>
          <HeaderLogoText>Pokédex</HeaderLogoText>
        </HeaderLogo>

        <HeaderList>
          <HeaderColorsList showColors={showColors}>
            <HeaderItem
              checked={checkedBlack}
              isCheckbox={true}
              thumbColor={headerColors.black}
              isDark={true}
            >
              <HeaderColor
                checked={checkedBlack}
                onChange={handleChangeBlack}
                inputProps={{ "aria-label": "controlled" }}
              />
            </HeaderItem>
            <HeaderItem
              checked={checkedPink}
              isCheckbox={true}
              thumbColor={headerColors.pink}
            >
              <HeaderColor
                checked={checkedPink}
                onChange={handleChangePink}
                inputProps={{ "aria-label": "controlled" }}
              />
            </HeaderItem>
            <HeaderItem
              checked={checkedGreen}
              isCheckbox={true}
              thumbColor={headerColors.green}
            >
              <HeaderColor
                checked={checkedGreen}
                onChange={handleChangeGreen}
                inputProps={{ "aria-label": "controlled" }}
              />
            </HeaderItem>
            <HeaderItem
              checked={checkedRed}
              isCheckbox={true}
              thumbColor={headerColors.red}
            >
              <HeaderColor
                checked={checkedRed}
                onChange={handleChangeRed}
                inputProps={{ "aria-label": "controlled" }}
              />
            </HeaderItem>
          </HeaderColorsList>
          <HeaderColorPicker
            isCheckbox={true}
            onClick={() => setShowColors((showColors) => !showColors)}
          >
            <img src={colorPicker} alt="Pick a color" />
          </HeaderColorPicker>
          <HeaderItem isCheckbox={false}>
            <HeaderLink to={"#"}>
              Stars
              <HeaderItemIcon>
                <Star />
              </HeaderItemIcon>
            </HeaderLink>
          </HeaderItem>
        </HeaderList>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
