import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/haeder.component";

import { AppContainer, Main } from "./global.styles";
import AllPokemons from "./pages/all-pokemons/all-pokemons.component";
import Favourites from "./pages/favourites/favourites.component";
import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

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
      basic: "rgba(65,65,65,1)",
      secondary: "rgba(82,82,82,1)",
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

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const curerntUser = useSelector(selectCurrentUser);

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
        currentUser={currentUser}
        appColor={getAppColor(
          checkedPink,
          checkedGreen,
          checkedRed,
          checkedBlack
        )}
      />

      <Main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AllPokemons
                curerntUser={curerntUser}
                appColor={getAppColor(
                  checkedPink,
                  checkedGreen,
                  checkedRed,
                  checkedBlack
                )}
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                curerntUser={curerntUser}
                appColor={getAppColor(
                  checkedPink,
                  checkedGreen,
                  checkedRed,
                  checkedBlack
                )}
              />
            }
          />
          <Route
            path="/signin"
            element={
              currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <SigninAndSignupPage
                  appColor={getAppColor(
                    checkedPink,
                    checkedGreen,
                    checkedRed,
                    checkedBlack
                  )}
                />
              )
            }
          />
        </Routes>
      </Main>
      <Footer
        appColor={getAppColor(
          checkedPink,
          checkedGreen,
          checkedRed,
          checkedBlack
        )}
      />
    </AppContainer>
  );
};

export default App;
