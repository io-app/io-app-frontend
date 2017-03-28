import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import feathers from 'feathers-client'
import io from 'socket.io-client'

const PrivateRoute = ({component, authenticated, ...rest}) => (
  <Route {...rest} render={props => (
    authenticated
      ? React.createElement(component, props)
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
  )} />
)

const prodConfig = {
  appURL: 'https://io-app-backend.now.sh'
}

const devConfig = {
  appURL: 'http://localhost:3030'
}

const getConfig = () => window.location.hostname.startsWith('levy-system')
? prodConfig
: devConfig

const socket = io(getConfig().appURL)

const app = feathers()
app.configure(feathers.hooks())
app.configure(feathers.socketio(socket))
app.configure(feathers.authentication({ storage: window.localStorage }))

class App extends Component {
  login = (user, password) => {
    app.authenticate({
      type: 'local',
      email: user,
      password
    })
    .then(result => this.setState({loginError: undefined, authenticated: true}))
    .catch(error => this.setState({loginError: error.message}))
  }

  state = {
    authenticated: false,
    loginError: undefined
  }

  componentDidMount () {
    app.authenticate()
      .then(result => this.setState({loginError: undefined, authenticated: true}))
  }

  render () {
    return (
      <Router>
        <MuiThemeProvider>
          <Switch>
            <PrivateRoute exact path='/' authenticated={this.state.authenticated} component={Dashboard} />
            <Route path='/login' render={props =>
              <LoginForm
                onLogin={this.login}
                loginError={this.state.loginError}
                authenticated={this.state.authenticated} />} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App
