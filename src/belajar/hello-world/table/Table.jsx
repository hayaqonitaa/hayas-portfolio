import Row from "./Row.jsx";

export default function Table() {
    return (
        <table border="1">
            <tbody>
                <Row id="1" text="Belajar React" />
                <Row id="2" text="Belajar React" />
                <Row id="3" text="Belajar React" />
            </tbody>
        </table>
    )
}