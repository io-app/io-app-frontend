import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm from './components/LoginForm'
import { cyan500 } from 'material-ui/styles/colors'
import firebase from 'firebase'

const PrivateRoute = ({component, authenticated, ...rest}) => (
  <Route {...rest} render={props => (
    authenticated
      ? React.createElement(component, props)
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
  )} />
)

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cyan500
  }
}

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
          <div style={styles.main}>
            <PrivateRoute exact path='/' authenticated={this.state.authenticated} component={props => <div>Hello</div>} />
            <Route path='/login' render={props =>
              <LoginForm
                onLogin={this.login}
                loginError={this.state.loginError}
                authenticated={this.state.authenticated} />} />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App
