import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

export const WithSpinner = (WrappedComponent) => {
  const SpinnerWithComponent = ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay />
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  return SpinnerWithComponent;
};

export const Spinner = () => (
  <SpinnerContainer>
    <SpinnerOverlay />
  </SpinnerContainer>
);
