import React from 'react';
import Button from '../button';
import style from './form.module.scss'
import { ITask } from '../../types/tasks';
import { v4 as uuidv4 } from 'uuid';

class Forms extends React.Component<{
    setTasks : React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        task: '',
        time: '00:00:00'
    }

    createTask(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(tasks =>
             [
                ...tasks,
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        )
        this.setState({
            task: '',
            time: '00:00:00'
        });
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.createTask.bind(this)}>
                <div className={style.inputContainer}>
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
                    value={this.state.task}
                    onChange={event => this.setState({...this.state, task: event.target.value})}
                    >
                    </input>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time"> Time</label>
                    <input
                        type='time'
                        step='1'
                        name='time'
                        value={this.state.time}
                        onChange={event => this.setState({...this.state, time: event.target.value})}
                        id='time'
                        min='00:00:00'
                        max='01:30:00'
                        required>
                    </input>
                </div>
                
                <Button type="submit"
                    text='Create'
                ></Button>
            </form>
        );
    }
}

export default Forms;