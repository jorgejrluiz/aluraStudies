import { ITask } from '../../types/tasks';
import ItemList from './itemList';
import style from './list.module.scss'

interface IListProps {
    tasks : ITask [] | [],
    selectTask : (task : ITask) => void
}

function List ( {tasks, selectTask} : IListProps) {

    return (
        <aside className={style.taskList}>
            <h2>
                Tasks list
            </h2>
            <ul>
                {
                    tasks.map((task, index) => (
                        <ItemList 
                            selectTask = {selectTask}
                            key={task.id}
                            {...task}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default List;