import React, { useState } from "react";

import { MdCatchingPokemon as LogoIcon } from "react-icons/md";
import { AiFillHeart as Heart } from "react-icons/ai";

import colorPicker from "../../assets/color-picker.png";

import {
  HeaderButton,
  HeaderColor,
  HeaderColorPicker,
  HeaderColorsList,
  HeaderContainer,
  HeaderItem,
  HeaderItemColor,
  HeaderItemIcon,
  HeaderLink,
  HeaderList,
  HeaderLogo,
  HeaderLogoIcon,
  HeaderLogoText,
  HeaderWrapper,
} from "./header.styles";
import { useDispatch } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";

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
  currentUser,
  appColor,
}) => {
  const [showColors, setShowColors] = useState(false);
  const dispatch = useDispatch();
  const signOutStartDispatch = () => dispatch(signOutStart());

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderItemColor appColor={appColor}>
          <HeaderLogo to="/pokedex">
            <HeaderLogoIcon>
              <LogoIcon />
            </HeaderLogoIcon>
            <HeaderLogoText>Pokédex</HeaderLogoText>
          </HeaderLogo>
        </HeaderItemColor>

        <HeaderList>
          <HeaderColorsList showColors={showColors} currentUser={currentUser}>
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
          {currentUser ? (
            <HeaderItem isCheckbox={false}>
              <HeaderItemColor appColor={appColor}>
                <HeaderLink to={"/pokedex/favourites"}>
                  Favourites
                  <HeaderItemIcon>
                    <Heart />
                  </HeaderItemIcon>
                </HeaderLink>
              </HeaderItemColor>
            </HeaderItem>
          ) : null}
          {currentUser ? (
            <HeaderItem isCheckbox={false}>
              <HeaderButton onClick={signOutStartDispatch} appColor={appColor}>
                Sign out
              </HeaderButton>
            </HeaderItem>
          ) : (
            <HeaderItem isCheckbox={false}>
              <HeaderItemColor appColor={appColor}>
                <HeaderLink to="/pokedex/signin">Sign in</HeaderLink>
              </HeaderItemColor>
            </HeaderItem>
          )}
        </HeaderList>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
