import React from 'react';
import Button from '../button';
import './style.scss'


class Forms extends React.Component {
    render() {
        return (
            <form className='newTask'>
                <div className='inputContainer'>
                    <label
                    htmlFor='task'>
                        Please insert a new category to learn
                    </label>
                    <input
                    type='text'
                    name='task'
                    id='task'
                    placeholder='What u want to learn?'
                    required
                    >
                    </input>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="time"></label>
                    <input
                        type='time'
                        step='1'
                        name='time'
                        id='time'
                        min='00:00:00'
                        max='01:30:00'
                        required>
                    </input>
                </div>
                
                <Button></Button>
            </form>
        );
    }
}

export default Forms;