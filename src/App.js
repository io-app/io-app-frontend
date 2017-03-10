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
  componentDidMount () {
    firebase.initializeApp(firebaseConfig)
  }

  login (user, password) {
    firebase.auth()
      .signInWithEmailAndPassword(user, password)
      .then(user => console.log(user))
      .catch(error => console.log(error))
  }

  render () {
    return (
      <MuiThemeProvider>
        <div style={styles.main}>
          <LoginForm onLogin={this.login} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
