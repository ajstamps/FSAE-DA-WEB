import React from 'react';
import LandingPage from "./LandingPage";
import {Grid, Container, Image} from "semantic-ui-react";
import LoginForm from "../components/LoginForm"

function LoginPage() {
  return (
    <div style={{backgroundColor: "#911c1c"}}>
      <LoginForm/>
    </div>
  );
}

export default LoginPage;
