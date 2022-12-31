import {useEffect, useState} from "react";

function Timer() {
    const [seconds, setSeconds] = useState(60)

    useEffect(() => {
    const timer = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
    }, 1000)

    return () => clearInterval(timer)
}, [seconds]);

return (
    <div className="timer">
        <p className="timer">{seconds}</p>
    </div>
);
}

export default Timer;
