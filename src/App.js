import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import feathers from './lib/feathers'

const PrivateRoute = ({component, authenticated, ...rest}) => (
  <Route {...rest} render={props => (
    authenticated
      ? React.createElement(component, props)
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
  )} />
)

class App extends Component {
  login = (user, password) => {
    feathers.authenticate({
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
    feathers.authenticate()
      .then(result => this.setState({loginError: undefined, authenticated: true}))

    feathers.on('logout', () => this.setState({authenticated: false}))
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
