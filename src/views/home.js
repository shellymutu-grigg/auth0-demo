import React from "react";

import AuthenticationButton from "../components/authentication-button";

const Home = () => (
  <>
    <div className='box'>
      <h1 className='cardTitle'>Auth0 Demo</h1>
        <h2 className='landingText'>Please select login / logout to use Auth0</h2>
        <br></br>
      <AuthenticationButton />
    </div>
  </>
)

export default Home;
