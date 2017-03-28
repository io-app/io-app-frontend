import feathers from 'feathers-client'
import io from 'socket.io-client'

const prodConfig = {
  appURL: 'https://io-app-backend.now.sh'
}

const devConfig = {
  appURL: 'http://localhost:3030'
}

const getConfig = () => window.location.hostname.startsWith('localhost')
  ? devConfig
  : prodConfig

const socket = io(getConfig().appURL)

const app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.socketio(socket))
  .configure(feathers.authentication({ storage: window.localStorage }))

export default app
