import React from 'react'
import BuiltItVisible from './BuiltItVisible';
import Counter from './Counter';
import CounterButton from './CounterButton';
import Es6 from './Es6';
import Form from './Form';

const Basic = () => {

    const fullName = 'Aaron rebello'

    let firstName;
    //  if(fullName){
    //      firstName = fullName.split(' ')[0];
    //      console.log(firstName)
    //  }
    const firstNameF = () => (
        firstName = fullName.split(' ')[0]
    )
    console.log(firstNameF(fullName))



    const multiplier = {
        number: [1, 2, 3],
        multiplierF() {
            return this.number.map((num) => {
                console.log(num * 2)
            })
        }
    }
    multiplier.multiplierF()


    const aaron = {
        myBirthYear: 1999,
        hasDrivingLicense: true,

        getSummary: function () {
            return `has ${this.hasDrivingLicense ? "a" : "no"} Drivers License.`
        }
    }
    console.log(aaron.getSummary())


    return (
        <div>
            <h2>React.js</h2>
            {/* <CounterButton /> */}
            {/* <Form /> */}
            {/* <BuiltItVisible /> */}
            {/* <Es6/> */}

        </div>
    )
}

export default Basic
