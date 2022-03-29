import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/haeder.component";

import { AppContainer, Main } from "./global.styles";
import AllPokemons from "./pages/all-pokemons/all-pokemons.component";

const App = () => {
  const colors = {
    blue: {
      basic: "rgba(66, 103, 178, 1)",
      secondary: "rgba(87, 120, 185, 1)",
      other: "rgba(66,103,178,0.75)",
    },
    pink: {
      basic: "rgba(248, 131, 121, 1)",
      secondary: "rgba(255, 148, 128, 1)",
      other: "rgba(248, 131, 121, 0.75)",
    },
    green: {
      basic: "rgba(72, 191, 83, 1)",
      secondary: "rgba(93, 208, 90, 1)",
      other: "rgba(72, 191, 83, 0.75)",
    },
    red: {
      basic: "rgba(207, 94, 96, 1)",
      secondary: "rgba(228, 111, 103, 1)",
      other: "rgba(207, 94, 96, 0.75)",
    },
    black: {
      basic: "rgba(82,82,82,1)",
      secondary: "rgba(65,65,65,1)",
      other: "rgba(82,82,82,0.75)",
    },
  };

  const [checkedPink, setCheckedPink] = useState(false);
  const [checkedGreen, setCheckedGreen] = useState(false);
  const [checkedRed, setCheckedRed] = useState(false);
  const [checkedBlack, setCheckedBlack] = useState(false);

  const handleChangePink = (event) => {
    setCheckedPink(event.target.checked);
    setCheckedRed(false);
    setCheckedGreen(false);
    setCheckedBlack(false);
  };

  const handleChangeGreen = (event) => {
    setCheckedGreen(event.target.checked);
    setCheckedPink(false);
    setCheckedRed(false);
    setCheckedBlack(false);
  };

  const handleChangeRed = (event) => {
    setCheckedRed(event.target.checked);
    setCheckedGreen(false);
    setCheckedPink(false);
    setCheckedBlack(false);
  };

  const handleChangeBlack = (event) => {
    setCheckedBlack(event.target.checked);
    setCheckedGreen(false);
    setCheckedPink(false);
    setCheckedRed(false);
  };

  const getAppColor = (pink, green, red, black) =>
    pink
      ? colors.pink
      : green
      ? colors.green
      : red
      ? colors.red
      : black
      ? colors.black
      : colors.blue;

  return (
    <AppContainer>
      <Header
        handleChangePink={handleChangePink}
        handleChangeGreen={handleChangeGreen}
        handleChangeRed={handleChangeRed}
        handleChangeBlack={handleChangeBlack}
        checkedPink={checkedPink}
        checkedGreen={checkedGreen}
        checkedRed={checkedRed}
        checkedBlack={checkedBlack}
        headerColors={colors}
      />

      <Main>
        <AllPokemons
          appColor={getAppColor(
            checkedPink,
            checkedGreen,
            checkedRed,
            checkedBlack
          )}
        />
      </Main>
    </AppContainer>
  );
};

export default App;
