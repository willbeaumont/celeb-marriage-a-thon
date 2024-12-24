"use client";

import { Authenticator } from "@aws-amplify/ui-react";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        An app to compare how do you're relationships stack up to those from the
        silver screen.
      </p>
      <h2>Sign Up</h2>
      <Authenticator initialState="signUp" />
    </div>
  );
};

export default About;
