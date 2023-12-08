import Button from "../button";
import Watch from "./watch";
import style from './timer.module.scss'
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface WatchProps {
    task: ITask | undefined,
    finishTask: () => void
}

export default function Timer( {task, finishTask} : WatchProps) {
    const [timer, setTempo] = useState<number>();

    useEffect(() => {
        if (task?.time) {
            setTempo(timeToSeconds(task.time))
        }
    }, [task])

    function regressCounter (counter: number = 0) {
        setTimeout(() => {
            if( counter > 0 ) {
                setTempo(counter -1);
                return regressCounter(counter - 1);
            }
            finishTask();
        },
        1000);
    } 

    return (
        <div className={style.timer}>
            <p  className={style.title}> Choose one task and start the timer</p>
            <div  className={style.watchWrapper}>
                <Watch timer={timer}></Watch>
            </div>
            <Button
                text="Start"
                onClick={() => regressCounter(timer)}
            />
        </div>
    )
}