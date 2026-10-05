export default function AlertButton({text, message}) {
    function handleClick(e) {
        console.info(e.target); // ini untuk menampilkan element yang di klik, yaitu button
        console.info(e); // ini untuk menampilkan event yang terjadi, yaitu click
        alert(message);
    }
    return (
        <button onClick={handleClick}>
            {text}
        </button>   
    )
}