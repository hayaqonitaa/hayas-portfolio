// import Todo from "./Todo.jsx";

// export default function TodoList() {
//     return (
//         <ul>
//             <Todo isCompleted={true} text="Belajar React" />
//             <Todo isCompleted={true} text="Belajar React" isDeleted ={true} />
//             <Todo isCompleted={false} text="Belajar React" />
//         </ul>
//     )
// }

import Todo from "./Todo.jsx";

export default function TodoList() {
    const dataTodo = [
        { id: 0, text: "Belajar React", isCompleted: true },
        { id: 1, text: "Belajar React", isCompleted: true, isDeleted: true },
        { id: 2, text: "Belajar React", isCompleted: false },
    ]
    const todos = dataTodo.map((todo) => (
        <Todo key={todo.id} {...todo} /> // jadi langsung ambil semua data di dataTodo
    ));
    return (
        <ul>
            {todos} // bisa langsung dimasukin juga isi const todos
        </ul>
    )
}