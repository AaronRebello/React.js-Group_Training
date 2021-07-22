import React, { Component } from 'react'

export default class AddDeleteComponent extends Component {

    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            option: props.option
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('option');
            const option = JSON.parse(json);

            if(option){
                this.setState(()=>({option}))
            }

        } catch (e) { }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.option.length !== this.state.option.length) {
            const json = JSON.stringify(this.state.option);
            localStorage.setItem('option', json)
        }

    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleDeleteOptions() { this.setState({ option: [] }) }

    handleDeleteOption(optionToRevome) {
        // console.log("hdo", option)
        this.setState((prevState) => ({
            option: prevState.option.filter((option) => {
                return optionToRevome !== option
            })
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.option.length);
        const option = this.state.option[randomNum];
        alert(option);
    }
    
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.option.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            option: prevState.option.concat(option)
        }));
    }

    render() {
        return (
            <div>
                <Header />
                <Action
                    hasOptions={this.state.option.length > 0}
                    handlePick={this.handlePick}
                />
                <Desc
                    option={this.state.option}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <Des />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}


AddDeleteComponent.defaultProps = {
    option: []
}

const Header = () => {
    return (
        <div>
            <h1>Welcome</h1>
        </div>
    )
}


const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}


const Desc = (props) => {
    return (
        <div>
            {/* {props.option.map((op) => <p key={Des}>Option: {op}</p>)} */}
            {props.option.map((op) =>
                <Des key="Des"
                    DesText={op}
                    deleteOption={props.handleDeleteOption}
                />)}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    )
}


const Des = (props) => {
    return (
        <div>
            {props.DesText}
            <button onClick={() => { props.deleteOption(props.DesText) }}>remove</button>
        </div>
    )
}




class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const opt = e.target.elements.opt.value.trim();
        const error = this.props.handleAddOption(opt);

        this.setState(() => {
            return { error };
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="opt" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
