import React, { Component } from 'react';
import axios from 'axios'
import {
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core';

export default class GetLeave extends Component {
    state = {
        rows:[]
    }
    constructor(

    ) {
        super()
        axios.get('http://localhost:5000/api/leave/getleave')
            .then(res => {
                console.log(res)
                this.state={
                    rows:[]
                }
                this.setState({
                    rows:res['data']['message']
                })
            })
    } 

    render() {
        if(this.state.rows.length===0){
            return <div>
                null
            </div>
        }
        return (
            <div>
                {this.state.rows.map((row)=>(
                 <p key={row['_id']}>{row['type']}</p>
                ))}
            </div>
        )
    }
}
