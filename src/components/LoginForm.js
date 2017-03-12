import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Card, CardActions, CardTitle} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { cyan500 } from 'material-ui/styles/colors'

const styles = {
  avatar: {
    margin: '1em',
    textAlign: 'center '
  },
  form: {
    padding: '0 1em 1em 1em'
  },
  input: {
    display: 'flex'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cyan500
  }
}

class LoginForm extends Component {
  handleUserChange = e => this.setState({user: e.target.value})
  handlePasswordChange = e => this.setState({password: e.target.value})
  handleSubmit = e => {
    e.preventDefault()
    if (this.props.onLogin) {
      this.props.onLogin(this.state.user, this.state.password)
    }
  }

  state = {
    user: '',
    password: ''
  }

  render () {
    const {loginError, authenticated} = this.props

    return (
      authenticated
      ? <Redirect to={{pathname: '/'}} />
      : <div style={styles.main}>
        <Card>
          <CardTitle
            title='Levy system' />
          <form className='commentForm' onSubmit={this.handleSubmit}>
            <div style={styles.form}>
              <div style={styles.input} >
                <TextField
                  floatingLabelText='Username'
                  value={this.state.user}
                  onChange={this.handleUserChange}
                  errorText={loginError} />
              </div>
              <div style={styles.input} >
                <TextField
                  floatingLabelText='Password'
                  value={this.state.password}
                  type='password'
                  onChange={this.handlePasswordChange} />
              </div>
            </div>
            <CardActions>
              <RaisedButton primary type='submit' value='Post' label='Sign in' />
            </CardActions>
          </form>
        </Card>
      </div>
    )
  }
}

export default LoginForm
