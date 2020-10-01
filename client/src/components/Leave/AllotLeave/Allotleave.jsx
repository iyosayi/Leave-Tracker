import React, { Component } from 'react'
import axios from 'axios'
import { Select, MenuItem, TextField } from '@material-ui/core'

export default class Allotleave extends Component {
  constructor() {
    super()
    this.state = {}
    axios
      .get('http://localhost:5000/api/user/fetchall')
      .then((users) => {
        this.state = {}
        this.setState({
          user: users['data']['user'],
          leave: users['data']['userLeave']
        })
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  state = {
    user: {},
    leave: {},
    userp: 'Please Select the User '
  }
  handleChange = (event) => {
    this.setState({
      userp: event.target.value
    })
    // setAge(event.target.value);
  }
  render() {
    if (this.state.user == undefined) {
      return <div>NOOOO</div>
    }
    return (
      <div>
        <Select value={this.state.userp} onChange={this.handleChange}>
          {this.state.user.map((eachuser) => (
            <MenuItem key={eachuser['_id']} value={eachuser['_id']}>
              {eachuser['name']}
            </MenuItem>
          ))}
        </Select>
        {this.state.leave.map((lea) => (
          <div>
            <p>{lea['type']}</p>
          </div>
        ))}
      </div>
    )
  }
}
