import React, { Component } from 'react'
import Counter from './Counter'

class CounterButton extends Component {
    constructor() {
        super()
        this.state = {
            countme: 0
        }
    }
    render() {
        return (
            <div>
                <h1>Start Stop {this.state.countme}</h1>
                <Counter data={this.state.countme} increase={(childCounter) => { this.setState({ countme: childCounter }) }} />
            </div>
        )
    }
}

export default CounterButton