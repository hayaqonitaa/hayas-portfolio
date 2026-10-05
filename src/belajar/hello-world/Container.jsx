export default function Container({children}) { // namanya emang harus children
    return (
        <div>
            <h1>Haya Qonita Amani</h1>
            {children}
            <footer>Ini footer</footer>
        </div>
    )
}