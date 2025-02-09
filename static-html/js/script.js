function getSeconds(h, m = 0, s = 0) {
    return (h * 60 + m) * 60 + s;
}

function setVideoPosition() {
    const day = getSeconds(24)
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    let x = getSeconds(h, m, date.getSeconds()) - getSeconds(12, 40)
    if (x < 0) { x += day; }
    const y = x / day;
    video.currentTime = video.duration * y;
    console.log('setVideoPosition', video.currentTime);
    setStyle(h*60+m)
}

function start(event) {
    const video = event.target;
    duration = video.duration;
    if (typeof (interval) === 'undefined') {
        setVideoPosition();
        interval = setInterval(setVideoPosition, 10000);
        console.log('=========')
    }
}

function getVideoPositionAsDayMinutes() {
    const day = getSeconds(24)
    const x = video.currentTime / video.duration;
    let t = x * day + getSeconds(12, 40);
    if (t > day) { t -= day; }
    return t / 60;
}

function progress(event) {
    const minutes = getVideoPositionAsDayMinutes();
    setStyle(minutes);
}

function getStyle(hours) {
    const styles = [
        [0, "night"],
        [8, "morning"],
        [10, "day"],
        [18, "evening"],
        [22, "night"],
    ].reverse()
    for (let [hour, style] of styles) {
        console.log(hour, style)
        if (hours > hour) {
            return style;
        }
    }
}

function setStyle(minutes) {
    const style = getStyle(minutes / 60);
    console.log(style);
    wrapper.classList=[style];
    const h = ('00' + Math.floor(minutes / 60)).slice(-2)
    const m = ('00' + Math.floor(minutes % 60)).slice(-2)
    
    clock.innerText = `${h}:${m}`
}
