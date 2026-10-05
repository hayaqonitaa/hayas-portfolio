// saat terjadi perubahan state, lalu render ulang -> react hanya akan memanggil ulang component yang statenya berubah
import {useState} from "react"; // agar merender ulang saat state berubah karena increment
export default function Counter(){
    let [counter, setCounter] = useState(0);
    console.info(`Render Counter ${counter}`)
    function handleClick(){
        // ini tetep 1 kali render, menunggu sampai event handler selesai
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // kalau mau +3 langsung aja
        // setCounter(counter + 3);

        //state update ini bisa +3 (c itu lambda?)
        setCounter((c) => c+1);
        setCounter((c) => c+1);
        setCounter((c) => c+1);

        // counter masih 0
        console.log(counter);
    }
    return (
        <div>
            <div>
                <button onClick={handleClick}>
                    Increment
                </button>
            </div>
            <h1>Counter: {counter}</h1>
        </div>
    )
}