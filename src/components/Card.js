import React, { Component } from 'react';
import '../components/Card.css';

class Card extends Component {
    constructor(props){
        super()
        this.state = {
            title: 'Initial',
            priority: 0
        }
    }
    render() {
        return (
            <div>
                <div className='Card'>
                    Title: {this.props.info.title} <br />
                    Priority: {this.props.info.priority}
                </div>
            </div>
        )
    }
}

export default Card;