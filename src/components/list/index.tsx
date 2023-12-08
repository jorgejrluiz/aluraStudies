import React from "react";

function List () {
    const tasks = [
        {
        task: 'React',
        time: '01:00:000'
        },
        {
            task: 'Typescripto',
            time: '02:00:000'
        },
        {
            task: 'money money money',
            time: '02:30:00'
        }
    ]

    return (
        <aside>
            <h2>
                Tasks list
            </h2>
            <ul>
                {
                    tasks.map((task, index) => (
                        <li key={index}>
                            <h3>
                                {task.task}
                            </h3>
                            <span>
                                {task.time}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default List;