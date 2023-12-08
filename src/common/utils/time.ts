export function timeToSeconds(time : string) {
    const [hours = '0', minutes = '0', seconds = '0' ] = time.split(':');

    const hoursInSecond = Number(hours) * 3600;
    const minutesInSecond = Number(minutes) * 60;

    return hoursInSecond + minutesInSecond + Number(seconds);
}

export function secondsToMinutes(seconds: number) {
    return 0;
}