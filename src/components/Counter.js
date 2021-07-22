import React from 'react'

const Counter = (props) => {

    const increase = () => {
        props.increase(props.data + 1)
    }

    const decrease = () => {
        props.increase(props.data - 1)
    }

    const reset = () => {
        props.increase("0")

    }

    return (
        <div>
            {/* <div>{props.data}</div> */}
            <button className="custom_button_clickme" onClick={increase}>+1</button>
            <button className="custom_button_clickme" onClick={decrease}>-1</button>
            <button className="custom_button_reset ml-3" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
