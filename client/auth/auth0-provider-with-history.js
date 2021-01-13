import React from 'react'
import { useHistory } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID, REACT_APP_AUTH0_AUDIENCE } from '../../index'

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory()

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname)
  }
  console.log('domain', REACT_APP_AUTH0_DOMAIN)
  console.log('clientId', REACT_APP_AUTH0_CLIENT_ID)
  console.log('audience', REACT_APP_AUTH0_AUDIENCE)
  return (
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN}
      clientId={REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={REACT_APP_AUTH0_AUDIENCE}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
