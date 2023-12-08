import Button from "../button";
import Watch from "./watch";
import style from './timer.module.scss'
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface WatchProps {
    task: ITask | undefined
}

export default function Timer( {task} : WatchProps) {
    const [timer, setTempo] = useState<number>();

    useEffect(() => {
        if (task?.time) {
            setTempo(timeToSeconds(task.time))
        }
    }, [task])

    return (
        <div className={style.timer}>
            <p  className={style.title}> Choose one task and start the timer</p>
            <div  className={style.watchWrapper}>
                <Watch ></Watch>
            </div>
            <Button
                text="Start"
            />
        </div>
    )
}