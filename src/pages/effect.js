import { useEffect, useState } from "react";

export default function Effect() {
    const [counter, setCounter] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if(start) {
            let interval = setInterval(() => {
                setCounter(counter + 1);
            }, 1);
            
            return () => {
                clearInterval(interval);
            };
        }
    }, [counter, start]);

    function startClicked() {
        setStart(!start);
    }

    return (
        <div>
            <div>Count: {counter}</div>

            <button onClick={startClicked}>
                {start ? 'STOP': 'START'}
            </button>
        </div>
    )
}