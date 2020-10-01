import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './login.css';
import axios from 'axios'
import { Router,Redirect } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://globalshala.com/">
        Globalshala
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default class Login extends Component {
  constructor() {
    super()
  }
  state = {
    email: '',
    password: '',
    redirect: null
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value
    this.setState({
      [name]: value
    })
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/user/login', this.state)
      .then(response => {
        console.log(response.data.success)
        if (response.data.success) {
          this.setState({ redirect: '/leave' })
        }
      })
  }

  render() {
    if(this.state.redirect!=null){
      return <Redirect to='/leave'/>
    }
    return (
      <Container className='Container' component="main" maxWidth="xs">
        <CssBaseline />
        <div className={'paper'}>
          <Avatar className={'avatar'}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={'form'} onSubmit={this.handleFormSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
          </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
