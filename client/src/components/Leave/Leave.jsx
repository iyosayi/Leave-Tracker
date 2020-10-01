import React, { Component } from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import axios from 'axios'

class Leave extends Component {
  constructor() {
    super()
  }
  state = {
    type: '',
    start: null,
    end: null
  }
  handleInputChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }
  handleFormSubmit = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:5000/api/leave/addleave', this.state)
      .then((res) => {
        console.log(res)
      })
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <form noValidate onSubmit={this.handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="type"
            label="Leave Type"
            name="type"
            autoComplete="leave"
            autoFocus
            onChange={this.handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="start"
            label="Start Date"
            defaultValue="2017-05-24"
            name="start"
            autoComplete="start"
            autoFocus
            type="date"
            onChange={this.handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            defaultValue="2017-05-24"
            id="end"
            label="End Date"
            name="end"
            type="date"
            autoComplete="end"
            autoFocus
            onChange={this.handleInputChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Add Leave
          </Button>
        </form>
      </Container>
    )
  }
}

export default Leave
