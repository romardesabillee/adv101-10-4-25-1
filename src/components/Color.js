
function Color ({color, fontSize, buttonClicked}) {

    return (
        <li 
            onClick={buttonClicked}
            style={{backgroundColor: color, fontSize: fontSize}} 
            className="text-white flex w-fit py-1 px-4 rounded-[12px]">
            {color}
        </li>
    )
}

export default Color;