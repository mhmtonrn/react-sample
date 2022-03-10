import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";


const counterStyle = {
    color: "#eee",
    backgroundColor: "#333",
    borderRadius: "5px",
    width: "20%"
};

export const Counter = ({time = 100, className}) => {
    const [counter, setCounter] = useState(0);
    const [timerStarted, setTimerStared] = useState(false)

    const startTimer = ()=>{
        setTimerStared(!timerStarted)
    }
    //
    // useEffect(() => {
    //     console.log("component did mount")
    //     return () => {
    //         console.log("component will unmount")
    //     }
    // }, [])
    //
    // useEffect(() => {
    //         console.log("component did update")
    //         return () => {
    //             console.log("ne zaman çalışacam acaba")
    //         }
    //     }
    // )

    useEffect(() => {
        let timeReff;
        console.log("timer effect")
        if (timerStarted){
            console.log("timer effect start")
            timeReff = setInterval(()=>{
                console.log("timer effect start +1")
                setCounter(counter+1)
            }, time)
        }
        return () => {
            if (timerStarted){
                console.log("timer effect stop")
                clearInterval(timeReff)
            }
        }
    })

    return <div className={className}>
        <div style={counterStyle}>
            counter: {counter}
        </div>
        <Button variant={"success"} onClick={() => {
            setCounter(counter + 1);
        }} className={"ms-1"}>+1</Button>
        <Button variant={"warning"} onClick={() => {
            setCounter(counter - 1);
        }} className={"ms-1"}>-1</Button>
        <Button variant={"danger"} onClick={() => {
            setCounter(0);
        }} className={"ms-1"}>Reset</Button>

        <Button variant={"success"} onClick={startTimer} className={"ms-1"}>Start</Button>

    </div>
}

export default Counter
