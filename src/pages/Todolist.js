import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';
import '../components/Card.css';

class Todolist extends Component{
    constructor(props){
        super()
        this.state = {
            taskList: [{title: '1', priority: 1},
                        {title: '2', priority: 3},
                        {title: '3', priority: 2}],
            inputTitle: 'hi',
            inputPriority: 1
        }
    }

    changeState = (event) => {
        this.setState({[event.target.name]: [event.target.value]})
    }

    addCard = () => {
        const editList = this.state.taskList
        editList.push({title: this.state.inputTitle, priority: this.state.inputPriority})
        this.setState({taskList: editList})
    }

    rmCard = () => {
        const editList = this.state.taskList
        editList.pop({title: this.state.inputTitle, priority: this.state.inputPriority})
        this.setState({taskList: editList})
    }

    render(){
        return(
            <div class='transs'>
            <div className='row' style={{'margin': '10px'}}>
                <div className='col' style={{'background-color': 'blue'}}>
                {this.state.taskList.map(task => 
                    <Card info={task} />
                )}
                </div>
                <div className='col' style={{'background-color': 'cyan'}}>
                Title: <input type='text' name='inputTitle' value={this.state.inputTitle} onChange={this.changeState}></input>
                <br />
                Priority: <input type='number' name='inputPriority' value={this.state.inputPriority} onChange={this.changeState}></input>
                </div>
            </div>
            <div className='row' style={{'margin': '10px'}}>
                <button className='btn btn-danger' onClick={this.addCard}>Add Card</button>
                <button className='btn btn-success' onClick={this.rmCard}>Remove Card</button>
                <Link to='/employee'>
                    <button className='btn btn-warning'>Go to Employee page</button>
                </Link>
            </div>
            </div>
        )
    }
}

export default Todolist;