export default function Toolbar({onClick}) {
    return (
        <div onClick={onClick} style={{backgroundColor: "lightblue", padding: "10px"}}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    )
}