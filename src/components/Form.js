import React from 'react'

const Form = () => {

    const app = {
        option: []
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log('submit called');
        const item = e.target.element.option.value;
        app.option.push(item);
        e.target.elements.option.value = '';
    }
    return (
        <div>
            <h1>Form Demo</h1>
            <p>{app.option.length > 0 ? 'Here is your option' : 'no option'}</p>
            <p>{app.option.length}</p>
            <form onSubmit={onFormSubmit}>
                <input name="option" type="text" />
                <button type="submit">add option</button>
            </form>

        </div>
    )
}

export default Form
