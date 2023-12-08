import React from "react";
import style from './watch.module.scss'
import { getMinutes, getSeconds } from "../../../common/utils/time";

interface IWatchProps {
    timer: number | undefined;
}

export default function Watch({timer = 0} : IWatchProps ) {
    const minutes = getMinutes(timer);
    const seconds = getSeconds(timer);

    const [tenOfMinutes, unitOfMinutes] = String(minutes).padStart(2,'0');
    const [tenOfSeconds, unitOfSeconds] = String(seconds).padStart(2,'0');

    return (
        <React.Fragment>
            <span className={style.numberWatch}>{tenOfMinutes}</span>
            <span className={style.numberWatch}>{unitOfMinutes}</span>
            <span className={style.dividerWatch}>:</span>
            <span className={style.numberWatch}>{tenOfSeconds}</span>
            <span className={style.numberWatch}>{unitOfSeconds}</span>
        </React.Fragment>
    )
}