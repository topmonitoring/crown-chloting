import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrapedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />>
    </SpinnerOverlay>
  ) : (
    <WrapedComponent {...otherProps} />
  );
};
export default WithSpinner;
