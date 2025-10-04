import Color from "@/components/Color";

export default function Home() {

    let number = 20;

    let colors = ['red', 'blue', 'green'];

    function buttonClicked(color) {
        alert(color);
    }

    return (
        <div>
            Hello World! {number + 10}
            <ul>
                {colors.map((value, index) => {
                    return (
                        <Color 
                            buttonClicked={() => buttonClicked(value)} 
                            key={index} 
                            color={value} 
                            fontSize={10} />
                    )
                })}
            </ul>
        </div>
    )
}