import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm from './components/LoginForm'
import { cyan500 } from 'material-ui/styles/colors'
import firebase from 'firebase'

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
      .then(user => this.setState({loginError: undefined}))
      .catch(error => this.setState({loginError: error.code}))
  }

  state = {
    loginError: undefined
  }

  componentDidMount () {
    firebase.initializeApp(firebaseConfig)
  }

  render () {
    return (
      <MuiThemeProvider>
        <div style={styles.main}>
          <LoginForm onLogin={this.login} loginError={this.state.loginError} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
