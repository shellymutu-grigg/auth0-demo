// Server and port configuration for the repo
const server = require('./server')

const port = process.env.PORT || 3000
const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID, REACT_APP_AUTH0_AUDIENCE } = process.env

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
  console.log('domain', REACT_APP_AUTH0_DOMAIN)
  console.log('clientId', REACT_APP_AUTH0_CLIENT_ID)
  console.log('audience', REACT_APP_AUTH0_AUDIENCE)
})

module.exports = {
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_AUDIENCE
}
