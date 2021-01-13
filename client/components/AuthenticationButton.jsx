import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

const AuthenticationButton = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()

  return isAuthenticated ? <button className="log-in" onClick={() => logout({ returnTo: window.location.origin }) }>Log Out</button> : <button className="log-in" onClick={() => loginWithRedirect()} >Log In</button>
}

export default AuthenticationButton
