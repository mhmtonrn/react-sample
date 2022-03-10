import {useEffect, useRef, useState} from "react";

const Greetings = ({language = "TR"}) => {
    const [name, setName] = useState("");
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const changeListener = (e) => {
        setName(e.target.value);
    }

    return <div>
        <input type={"text"} ref={inputRef} onChange={changeListener}/>
        <h1>Merhaba {name} Seçili Dil {language}</h1>

    </div>
}

export default Greetings;
