import { useState } from "react"


export default function State() {

    const [value, setValue] = useState(0);

    function buttonClicked() {
        setValue(value + 1);
    }

    return (
        <div>
            <div>{value}</div>

            <button 
                onClick={buttonClicked}
                className="border-1 p-2">
                CLICK!!
            </button>
        </div>
    )
}