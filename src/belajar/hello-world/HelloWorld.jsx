import './HelloWorld.css'
import TodoList from './todolist/TodoList.jsx'
import Table from './table/Table.jsx'
import AlertButton from './button/AlertButton.jsx'
import MyButton from './button/MyButton.jsx'
import Toolbar from './button/Toolbar.jsx'
import SearchForm from './form/SearchForm.jsx'
import SayHelloForm from './form/SayHelloForm.jsx'
import Counter from './form/Counter.jsx'

// ini namanya fragment <></>
export default function HelloWorld() {
    const props = {
        text: "Hello, World! ini namanya spread syntax"
    }
    return (
        <div>
            <Header 
                {...props} // sama kaya text = {props.text}
            />
            <AlertButton text="Click Me!" message="You clicked me" />
            <MyButton text="Smash me" onSmash={() => alert("You smash me")}/> // event handler
            <Toolbar onClick={(e) => {
                e.stopPropagation(); // ini untuk menghentikan event bubbling, jadi kalo di klik button, div ga ke klik
                alert("You click toolbar")
            }}/>
            <Counter/>
            <Counter/> // ini statenya berbeda dengan yang atas, karena ada 2 Counter jadi ada 4 di log
            <SayHelloForm/>
            <SearchForm />
            <Paragraph />
            <TodoList />
            <Table />
        </div>
    )
}

function Header({text = "ini default"}) {
    
    return (
        <h1 className='title'>{text}</h1>
    )
}

function Paragraph() {
    const text = "This is a simple React component that displays a greeting message.";
    const background = {
        backgroundColor: "lightgray",
        padding: "10px",
    }
    return (
        <p style={background} className='content'>
            {text.toUpperCase()}
        </p>
    )
}