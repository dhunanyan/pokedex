import React, { useState } from "react";
import { SearchBox } from "../search-box/search-box.component.jsx";
import {
  SearchHeaderAdvancedButton,
  SearchHeaderAdvancedButtonContainer,
  SearchHeaderAdvancedButtonText,
  SearchHeaderAdvancedIcon,
  SearchHeaderContainer,
  SearchHeaderFixed,
  SearchHeaderMain,
  SearchHeaderToggle,
  SearchHeaderToggleInner,
  SearchHeaderWrapper,
} from "./search-header.styles.jsx";

import { CSSTransition } from "react-transition-group";

import "./search-header.animations.scss";

const SearchHeader = ({
  handleNameChange,
  handleTypeChange,
  handleWeightStartChange,
  handleWeightEndChange,
  handleHeightStartChange,
  handleHeightEndChange,
}) => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  return (
    <SearchHeaderFixed>
      <SearchHeaderWrapper>
        <SearchHeaderAdvancedButtonContainer>
          <SearchHeaderAdvancedButton
            onClick={() =>
              setShowAdvancedSearch((showAdvancedSearch) => !showAdvancedSearch)
            }
          >
            <SearchHeaderAdvancedIcon showAdvancedSearch={showAdvancedSearch} />
            <SearchHeaderAdvancedButtonText>
              Advanced search
            </SearchHeaderAdvancedButtonText>
          </SearchHeaderAdvancedButton>
        </SearchHeaderAdvancedButtonContainer>
        <SearchHeaderContainer showAdvancedSearch={showAdvancedSearch}>
          <SearchHeaderMain>
            <SearchBox
              placeholder={"Search by name"}
              handleChange={handleNameChange}
              type={"search"}
            />
            <SearchBox
              placeholder={"Search by type"}
              handleChange={handleTypeChange}
              type={"search"}
            />
          </SearchHeaderMain>

          <CSSTransition
            in={showAdvancedSearch}
            timeout={250}
            classNames="advancedSearch"
            unmountOnExit
          >
            <SearchHeaderToggle>
              <SearchHeaderToggleInner>
                <SearchBox
                  placeholder={"Min weight"}
                  handleChange={handleWeightStartChange}
                  type={"number"}
                  min={"0"}
                />
                <SearchBox
                  placeholder={"Max weight"}
                  handleChange={handleWeightEndChange}
                  type={"number"}
                  min={"1"}
                />
              </SearchHeaderToggleInner>
              <SearchHeaderToggleInner>
                <SearchBox
                  placeholder={"Min height"}
                  handleChange={handleHeightStartChange}
                  type={"number"}
                  min={"0"}
                />
                <SearchBox
                  placeholder={"Max height"}
                  handleChange={handleHeightEndChange}
                  type={"number"}
                  min={"1"}
                />
              </SearchHeaderToggleInner>
            </SearchHeaderToggle>
          </CSSTransition>
        </SearchHeaderContainer>
      </SearchHeaderWrapper>
    </SearchHeaderFixed>
  );
};

export default SearchHeader;
