import React, { Component } from 'react';
import axios from 'axios';

class Employee extends Component {
    constructor(props){
        super()
        this.state = {
            info: []
        }
    }

    componentDidMount(){
        axios.get('https://api.github.com/users').then( result => 
            this.setState({info: result.data})
            // console.log(result.data)
        )
    }

    render(){
        return (
            <div>
                Employee
                {this.state.info.map( data => 
                    <div>
                        Name: {data.login}
                        <img src={data.avatar_url} style={{'width': '350px' }}/>
                    </div>
                )}
            </div>
        )
    }
}

export default Employee;