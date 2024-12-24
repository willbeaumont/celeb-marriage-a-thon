"use client";

import { Authenticator } from "@aws-amplify/ui-react";

const SignIn = () => {
  return <Authenticator initialState="signIn" />;
};

export default SignIn;
