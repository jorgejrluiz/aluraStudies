import { ITask } from '../../../types/tasks';
import style from './itemList.module.scss';


interface IItemListProps extends ITask{
    selectTask : (task : ITask) => void
}
export default function ItemList (
    {
        task, 
        time,
        selected,
        completed,
        id,
        selectTask
    } : IItemListProps  ) {
    return (
        <li  
            className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''}`}
            onClick={() => !completed && selectTask(
                {
                    task, 
                    time,
                    selected,
                    completed,
                    id
                })
            }
        >
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
            {completed && <span className={style.completed} aria-label='completedItem'></span>}
        </li>
    )
}