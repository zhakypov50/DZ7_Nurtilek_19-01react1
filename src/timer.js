import {useEffect, useState} from "react";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} time`;
    });

    return (
        <div>
            <p>You clicked {count} time</p>
            <button onClick={() => setCount(count + 1)}>
                click
            </button>
        </div>
    );
}

export default Timer;