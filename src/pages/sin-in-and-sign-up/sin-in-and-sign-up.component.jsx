import React from "react";
import "./sin-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sing-up/sign-up.component";

const SignInAndSigngUpPage = () => (
  <div className="sign-in-and-sign-up ">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSigngUpPage;
