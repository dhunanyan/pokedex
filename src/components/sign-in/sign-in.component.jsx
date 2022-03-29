import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import {
  SignInButton,
  SignInButtons,
  SignInContainer,
  SignInDescr,
  SignInTitle,
} from "./sign-in.styles";

const SignIn = ({ appColor }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { email, password } = userData;
  const dispatch = useDispatch();
  const googleSignInStartDispatch = () => dispatch(googleSignInStart());

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <SignInDescr>Sign in with your email and password</SignInDescr>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <SignInButtons>
          <SignInButton appColor={appColor} type="submit">
            Sign in
          </SignInButton>
          <SignInButton
            appColor={appColor}
            type="button"
            onClick={googleSignInStartDispatch}
            isGoogleSignIn
          >
            Sign in with Google
          </SignInButton>
        </SignInButtons>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
