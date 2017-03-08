import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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
  }
}

class LoginForm extends Component {
  handleUserChange = e => this.setState({user: e.target.value})
  handlePasswordChange = e => this.setState({password: e.target.value})

  state = {
    user: '',
    password: ''
  }

  render () {
    return (
      <Card>
        <CardTitle
          title='Levy system' />
        <form className='commentForm' onSubmit={this.handleSubmit}>
          <div style={styles.form}>
            <div style={styles.input} >
              <TextField
                floatingLabelText='Username'
                value={this.state.user}
                onChange={this.handleUserChange} />
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
    )
  }
}

export default LoginForm
