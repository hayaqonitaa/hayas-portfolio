export default function SearchForm(){
    return (
        <form>
            <input type="text"/>
            <button onClick={(e) => {
                e.preventDefault(); // jadi ga ke submit
                alert("You search");
            }}> Search

            </button>
        </form>
    )
}