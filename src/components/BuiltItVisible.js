

// import React, { Component } from 'react'

// export default class BuiltItVisible extends Component {
//     constructor(props) {
//         super(props)
//         this.ToogleOne = this.ToogleOne.bind(this);
//         this.state = {
//             show: true
//         }
//     }

//     ToogleOne() {
//         this.setState({
//             show: false
//         })
//     }

//     render() {
//         return (
//             <div>
//                 {
//                     this.state.show ? <p>Hello World!</p> : null
//                 }
//                 <button onClick={this.ToogleOne}>Toggle1</button>

//             </div>
//         )
//     }
// }

import React, { useState } from 'react'

const BuiltItVisible = () => {
    const [show, setShow] = useState(true)
    return (
        <div>
            {
                show ? <p>Hello World!</p> : null
            }
            <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
    )
}

export default BuiltItVisible

