import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm from './components/LoginForm'
import { cyan500 } from 'material-ui/styles/colors'

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

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div style={styles.main}>
          <LoginForm />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
