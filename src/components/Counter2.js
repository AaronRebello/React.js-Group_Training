import React, { Component } from 'react'

export default class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            // count: props.count
            count: 0
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = parseInt(json);

            if (!isNaN(count)) {
                this.setState(() => ({ count: count }))
            }

        } catch (error) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            // const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', this.state.count)
        }

    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )

    }
}

// Counter2.defaultProps = {
//     count: 0
// }
