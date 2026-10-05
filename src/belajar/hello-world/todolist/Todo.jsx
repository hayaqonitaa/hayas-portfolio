export default function Todo({text, isCompleted, isDeleted = false}) {
    if (isDeleted) {
        return null
    }
    // else if (isCompleted) {
    //     return (
    //         <li>
    //             <del>{text}</del>
    //         </li>
    //     )
    // } else {
    //     return (
    //         <li>
    //             {text}
    //         </li>
    //     )
    // }
    // pake ternary operator
    // else {
    //     return (
    //         <li>
    //             {isCompleted ? <del>{text}</del> : text}
    //         </li>
    //     )
    // }
    // LOGICAL AND
    else {
        return (
            <li>
                {text} {isCompleted && 'checked'}
            </li>
        )
    }
}