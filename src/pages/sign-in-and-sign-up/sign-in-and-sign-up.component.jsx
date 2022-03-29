import React from "react";

import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import {
  SignInAndSignUpWrapper,
  SignInSignAndUpContainer,
} from "./sign-in-and-sign-up.styles";
import Hero from "../../components/hero/hero.component";
import signInHero from "../../assets/sign-in-hero.jpg";

const SigninAndSignupPage = ({ appColor }) => (
  <>
    <Hero
      heroImageUrl={signInHero}
      heroTitle={"Join us to have fun!"}
      heroDescr={"Sign up or use your account to sign in"}
    />
    <SignInAndSignUpWrapper appColor={appColor}>
      <SignInSignAndUpContainer>
        <SignIn appColor={appColor} />
        <SignUp appColor={appColor} />
      </SignInSignAndUpContainer>
    </SignInAndSignUpWrapper>
  </>
);

export default SigninAndSignupPage;
