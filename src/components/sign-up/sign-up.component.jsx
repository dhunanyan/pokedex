import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";

import { signUpStart } from "../../redux/user/user.actions";

import {
  SignInButton,
  SignInContainer,
  SignInDescr,
  SignInTitle,
} from "../sign-in/sign-in.styles";

const SignUp = ({ appColor }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    dispatch(signUpStart({ displayName, email, password }));
  };

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <SignInContainer>
      <SignInTitle>I do not have an account</SignInTitle>
      <SignInDescr>Sign up with your email and password</SignInDescr>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleDisplayNameChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          label="E-mail"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          label="Confirm Password"
          required
        />

        <SignInButton appColor={appColor} type="submit">
          Sign up
        </SignInButton>
      </form>
    </SignInContainer>
  );
};

export default SignUp;
