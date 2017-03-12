import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import firebase from 'firebase'

const PrivateRoute = ({component, authenticated, ...rest}) => (
  <Route {...rest} render={props => (
    authenticated
      ? React.createElement(component, props)
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
  )} />
)

const firebaseConfig = {
  apiKey: 'AIzaSyC9nbhtDMP9_59eoNGFmWJwbRwkCG_bYSo',
  authDomain: 'nors-bc71d.firebaseapp.com',
  databaseURL: 'https://nors-bc71d.firebaseio.com',
  storageBucket: 'nors-bc71d.appspot.com',
  messagingSenderId: '191648874197'
}

class App extends Component {
  login = (user, password) => {
    firebase.auth()
      .signInWithEmailAndPassword(user, password)
      .then(user => this.setState({loginError: undefined, authenticated: true}))
      .catch(error => this.setState({loginError: error.code}))
  }

  state = {
    authenticated: false,
    loginError: undefined
  }

  componentDidMount () {
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loginError: undefined, authenticated: true})
      }
    })
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
